import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  header: {
    position: 'sticky',
    top: 0,
    transition: 'box-shadow 150ms ease',
    backgroundColor: theme.white,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${theme.colors.gray[2]}`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}))
