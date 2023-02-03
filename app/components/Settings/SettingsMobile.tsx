import type { State } from 'react-burger-menu';
import { slide as Menu } from 'react-burger-menu';
import { isMobile } from 'react-device-detect';
import Settings from './Settings';

export default function SettingsMobile({handleStateChange, menuOpen, closeMenu, setThreshold, threshold, setDisplayIn3D, displayIn3D}: { handleStateChange: (state: State) => void, menuOpen: boolean, closeMenu: () => void, setThreshold: (threshold: number) => void, threshold: number, setDisplayIn3D: (displayIn3D: boolean) => void, displayIn3D: boolean }) {
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
                <Settings setThreshold={setThreshold} threshold={threshold} setDisplayIn3D={setDisplayIn3D} displayIn3D={displayIn3D} />
            </Menu>
      );
    }

    return null;
}