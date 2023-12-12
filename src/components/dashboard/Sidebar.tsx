import { Nav } from "react-bootstrap";

type SidebarProps = {
  routes: Array<any>,
  image: string,
  color: string
}

function Sidebar({ color, routes }: SidebarProps) {
  const logo = "https://favicon.io/assets/static/index-generate-from-image.2f2d982.64f9de6cc7d27508623dc457c89a3e34.png"
  return (
    <div className="sidebar" data-color={color}>
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={logo} width={100} height={100} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            Creative Tim
          </a>
        </div>
        <Nav>
          {routes.length}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
