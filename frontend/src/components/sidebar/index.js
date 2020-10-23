import React, { memo } from 'react';
import { FiBarChart } from 'react-icons/fi';
import { AiFillTool, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiBarChart2Line } from 'react-icons/ri';

// Components
import SidebarItem from './sidebarItem';

// Local
import './style.scss';
import useSidebarActions from '../.././store/sidebar/actions';
import useHistorialActions from '../../store/historial/actions';
import { useCallback } from 'react';
import MonkeyImage from '../../assets/logo/monkey.png';
import { useLocation } from "react-router-dom";

function Sidebar() {
  const { state: sidebarState, toggleSidebar } = useSidebarActions();
  const { pathname } = useLocation();
  const { toggleHistorial } = useHistorialActions();
  const handleClick = useCallback(
    () => {
      toggleSidebar();
      toggleHistorial();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div
      className={
        sidebarState.isSidebarExpanded
          ? 'monkeys-sidebar-expanded'
          : 'monkeys-sidebar'
      }
    >
      <div
        className={`monkeys-px-4 monkeys-py-3 h-100 w-100 d-flex align-items-center justify-content-${
          sidebarState.isSidebarExpanded ? "start" : "center"
        }`}
      >
        {sidebarState.isSidebarExpanded ? (
          <img
            src={MonkeyImage}
            onClick={handleClick}
            className='monkeys-menu-image absolute-center-expanded'
            alt='Monkeys Logo'
          />
        ) : (
          <FiBarChart
            onClick={handleClick}
            className="monkeys-menu-icon monkeys-text-gray pointer"
          />
        )}
      </div>
      <div className="monkeys-mt-5">
        {sidebarState.isSidebarExpanded && (
          <SidebarItem>
            <div
              className={`d-flex monkeys-py-2 monkeys-pl-4 monkeys-pt-4 monkeys-pb-4 align-items-center justify-content-${
                sidebarState.isSidebarExpanded ? "start" : "center"
              } position-absolute h-100 w-100`}
            >
              <div className="monkeys-sidebar-avatar-img" />
              <div className="monkeys-ml-1 d-flex flex-column">
                <span>Welcome</span>
                <span className="monkeys-text-gray">Nombre de usuario</span>
              </div>
            </div>
          </SidebarItem>
        )}
        <div className="monkeys-mt-4">
          <SidebarItem pathname="/">
            <div
              className={`d-flex monkeys-py-2 monkeys-px-4 align-items-center justify-content-${
                sidebarState.isSidebarExpanded ? "start" : "center"
              } position-absolute h-100 w-100`}
            >
              <AiOutlinePlusSquare className="monkeys-f-4 monkeys-text-gray" />
              {sidebarState.isSidebarExpanded && (
                <div
                  className={`monkeys-ml-1 ${
                    pathname === "/"
                      ? "monkeys-text-secondary-blue"
                      : "monkeys-text-secondary-gray"
                  }`}
                >
                  Apps
                </div>
              )}
            </div>
          </SidebarItem>
          <SidebarItem pathname="/organizations">
            <div
              className={`d-flex monkeys-py-2 monkeys-px-4 align-items-center justify-content-${
                sidebarState.isSidebarExpanded ? "start" : "center"
              } position-absolute h-100 w-100`}
            >
              <RiBarChart2Line className="monkeys-f-4 monkeys-text-gray" />
              {sidebarState.isSidebarExpanded && (
                <div
                  className={`monkeys-ml-1 ${
                    pathname === "/organizations"
                      ? "monkeys-text-secondary-blue"
                      : "monkeys-text-secondary-gray"
                  }`}
                >
                  Organizations
                </div>
              )}
            </div>
          </SidebarItem>
          <SidebarItem pathname="/manage-project">
            <div
              className={`d-flex monkeys-py-2 monkeys-px-4 align-items-center justify-content-${
                sidebarState.isSidebarExpanded ? "start" : "center"
              } position-absolute h-100 w-100`}
            >
              <AiFillTool className="monkeys-f-4 monkeys-text-gray" />
              {sidebarState.isSidebarExpanded && (
                <div
                  className={`monkeys-ml-1 ${
                    pathname === "/manage-project"
                      ? "monkeys-text-secondary-blue"
                      : "monkeys-text-secondary-gray"
                  }`}
                >
                  Manage Project
                </div>
              )}
            </div>
          </SidebarItem>
        </div>
      </div>
    </div>
  );
}

export default memo(Sidebar);
