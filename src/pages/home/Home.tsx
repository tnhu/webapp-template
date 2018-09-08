import { Button, Menu, MenuDivider, MenuItem, Popover, Position } from '@blueprintjs/core'

import * as React from 'react'

import * as styles from './Home.scss'
import logo from './logo.svg'

export default class DropdownMenuExample extends React.PureComponent<{}> {
  public render() {
    const exampleMenu = (
      <Menu>
        <MenuItem icon="graph" text="Graph" />
        <MenuItem icon="map" text="Map" />
        <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
        <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
        <MenuDivider />
        <MenuItem icon="cog" text="Settings...">
          <MenuItem icon="add" text="Add new application" disabled={true} />
          <MenuItem icon="remove" text="Remove application" />
        </MenuItem>
      </Menu>
    )
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
          <Button icon="share" text="Open in..." />
        </Popover>
      </div>
    )
  }
}
