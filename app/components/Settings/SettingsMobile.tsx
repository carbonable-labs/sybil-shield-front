import type { State } from 'react-burger-menu';
import { slide as Menu } from 'react-burger-menu';
import { isMobile } from 'react-device-detect';
import Settings from './Settings';

export default function SettingsMobile({handleStateChange, menuOpen, closeMenu}: { handleStateChange: (state: State) => void, menuOpen: boolean, closeMenu: () => void }) {
    if (isMobile) {
        return (
            <Menu 
                customBurgerIcon={ false }
                customCrossIcon={ false }
                pageWrapId={ "page-wrap" }
                outerContainerId={"outer-container"}
                isOpen={menuOpen}
                onStateChange={(state) => handleStateChange(state)}
                onClose={closeMenu}
                className="bg-neutral-800"
                right={true}
                >
                <Settings />
            </Menu>
      );
    }

    return null;
}