import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import type { TransitionProps } from '@mui/material/transitions'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import { TreeItemContent, TreeItemIconContainer, TreeItemLabel, TreeItemRoot } from '@mui/x-tree-view/TreeItem'
import { TreeItemIcon } from '@mui/x-tree-view/TreeItemIcon'
import { TreeItemProvider } from '@mui/x-tree-view/TreeItemProvider'
import { useTreeItem, type UseTreeItemParameters } from '@mui/x-tree-view/useTreeItem'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { mockTreeViewItems } from '~/constants/mock-data'
import type { Color } from '~/types/tree-view.type'

function TransitionComponent(props: TransitionProps) {
  const { in: inProp, children, ...rest } = props

  return (
    <Collapse
      {...rest}
      in={inProp}
      timeout={300}
      sx={{
        '& .collapse-content': {
          opacity: inProp ? 1 : 0,
          transform: `translateY(${inProp ? 0 : 20}px)`,
          transition: 'opacity 300ms ease, transform 300ms ease'
        }
      }}
    >
      <Box className='collapse-content'>{children}</Box>
    </Collapse>
  )
}

interface CustomLabelProps {
  children: React.ReactNode
  color?: Color
  expandable?: boolean
}

function CustomLabel({ color, expandable, children, ...other }: CustomLabelProps) {
  const theme = useTheme()

  const colors = {
    blue: theme.palette.primary.main,
    green: theme.palette.success.main
  }

  const iconColor = color ? colors[color] : null

  return (
    <TreeItemLabel {...other} sx={{ display: 'flex', alignItems: 'center' }}>
      {iconColor && (
        <Box sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}>
          <svg width={6} height={6}>
            <circle cx={3} cy={3} r={3} fill={iconColor} />
          </svg>
        </Box>
      )}
      <Typography className='labelText' variant='body2' sx={{ color: 'text.primary' }}>
        {children}
      </Typography>
    </TreeItemLabel>
  )
}

interface CustomTreeItemProps
  extends Omit<UseTreeItemParameters, 'rootRef'>,
    Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {}

const CustomTreeItem = forwardRef(function CustomTreeItem(props: CustomTreeItemProps, ref: React.Ref<HTMLLIElement>) {
  const { id, itemId, label, disabled, children, ...other } = props

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
    publicAPI
  } = useTreeItem({ id, itemId, children, label, disabled, rootRef: ref })

  const item = publicAPI.getItem(itemId)
  const color = item?.color

  return (
    <TreeItemProvider id={id} itemId={itemId}>
      <TreeItemRoot {...getRootProps(other)}>
        <TreeItemContent
          {...getContentProps({
            className: clsx('content', {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
              disabled: status.disabled
            })
          })}
        >
          {status.expandable && (
            <TreeItemIconContainer {...getIconContainerProps()}>
              <TreeItemIcon status={status} />
            </TreeItemIconContainer>
          )}

          <CustomLabel {...getLabelProps({ color })} />
        </TreeItemContent>
        {children && <TransitionComponent {...getGroupTransitionProps({ className: 'groupTransition' })} />}
      </TreeItemRoot>
    </TreeItemProvider>
  )
})

export default function CustomTreeView() {
  return (
    <Card variant='outlined' sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
      <CardContent>
        <Typography component='h2' variant='subtitle2'>
          Product tree
        </Typography>
        <RichTreeView
          items={mockTreeViewItems}
          aria-label='pages'
          multiSelect
          defaultExpandedItems={['1', '1.1']}
          defaultSelectedItems={['1.1', '1.1.1']}
          sx={{
            m: '0 -8px',
            pb: '8px',
            height: 'fit-content',
            flexGrow: 1,
            overflowY: 'auto'
          }}
          slots={{ item: CustomTreeItem }}
        />
      </CardContent>
    </Card>
  )
}
