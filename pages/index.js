import React, { useState } from "react";

export default function index() {
  const [elementToggle, setElementToggle] = useState(false);
  const [toolToggle, setToolToggle] = useState(false);
  const [templateToggle, setTemplateToggle] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const onShowMenu = (type) => {
    if (type === "elements") {
      setElementToggle(!elementToggle);
      setToolToggle(false);
      setTemplateToggle(false);
      setDisplayMenu(!elementToggle);
    } else if (type === "tools") {
      setToolToggle(!toolToggle);
      setElementToggle(false);
      setTemplateToggle(false);
      setDisplayMenu(!toolToggle);
    } else if (type === "template") {
      setTemplateToggle(!templateToggle);
      setToolToggle(false);
      setElementToggle(false);
      setDisplayMenu(!templateToggle);
    }
  };

  const showSideMenu = () => {
    if (elementToggle) {
      return (
        <div className="sidebar-menu-side">
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy1.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy2.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy3.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy4.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy5.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy6.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
        </div>
      );
    } else if (toolToggle) {
      return (
        <div className="sidebar-menu-side">
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy1.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy2.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-grid">
            <img
              src="/images/toy3.png"
              className="sidebar-menu-side-grid-image"
            />
          </div>
        </div>
      );
    } else if (templateToggle) {
      return (
        <div className="sidebar-menu-side-template">
          <div className="sidebar-menu-side-template-grid">
            <img
              src="/images/short.png"
              className="sidebar-menu-side-template-grid-image"
            />
          </div>
          <div className="sidebar-menu-side-template-grid">
            <img
              src="/images/long.png"
              className="sidebar-menu-side-template-grid-image"
            />
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className="main_container">
        <div className="main_container--header">
          <div className="header--nav_left">
            <h4 className="header--nav-h4">Home</h4>
            <span className="header--nav-icon">
              <ion-icon name="arrow-undo-outline"></ion-icon>
            </span>
            <span className="header--nav-icon">
              <ion-icon name="arrow-redo-outline"></ion-icon>
            </span>
          </div>
          <div className="header-nav_right">
            <button className="header-btn">SHARE</button>
            <button className="header-btn">
              <span>[!]</span>DOWNLOAD
            </button>
          </div>
        </div>
        <div className="main_container--toolbar">tool header</div>
        <div className="main_container--sidebar">
          <div className="sidebar-menu-container">
            <div
              className={
                templateToggle
                  ? "sidebar-menu-item sidebar-menu-item-active"
                  : "sidebar-menu-item"
              }
              onClick={() => onShowMenu("template")}
            >
              <span className="sidebar-menu-icon">
                <ion-icon name="shirt-outline"></ion-icon>
              </span>
              <span className="sidebar-menu-text">Template</span>
            </div>

            <div
              className={
                elementToggle
                  ? "sidebar-menu-item sidebar-menu-item-active"
                  : "sidebar-menu-item"
              }
              onClick={() => onShowMenu("elements")}
            >
              <span className="sidebar-menu-icon">
                <ion-icon name="shapes-outline"></ion-icon>
              </span>
              <span className="sidebar-menu-text">Elements</span>
            </div>

            <div
              className={
                toolToggle
                  ? "sidebar-menu-item sidebar-menu-item-active"
                  : "sidebar-menu-item"
              }
              onClick={() => onShowMenu("tools")}
            >
              <span className="sidebar-menu-icon">
                <ion-icon name="square-outline"></ion-icon>
              </span>
              <span className="sidebar-menu-text">Tools</span>
            </div>

            <div className="sidebar-menu-item">
              <span className="sidebar-menu-icon">
                <ion-icon name="text-outline"></ion-icon>
              </span>
              <span className="sidebar-menu-text">Text</span>
            </div>

            <div className="sidebar-menu-item">
              <span className="sidebar-menu-icon">
                <ion-icon name="cloud-upload-outline"></ion-icon>
              </span>
              <span className="sidebar-menu-text">Upload</span>
            </div>
          </div>
        </div>
        <div className="main_container--main">
          {displayMenu ? showSideMenu() : ""}
          <canvas
            id="canvas"
            width="500"
            height="500"
            className="canvas"
            // style="border:2px solid #000000"
          ></canvas>
        </div>
        <div className="main_container--toolbar_footer">tool footer</div>
      </div>
    </>
  );
}
