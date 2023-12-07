import { ReactNode } from "react";
import ProLayout, { DefaultFooter } from "@ant-design/pro-layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  BookOutlined,
  FormOutlined,
  UserOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import logo from "./assets/logo.svg";
import { Button } from "antd";
import { removeToken } from "./utils/token";

const menuData = [
  {
    path: "/",
    name: "Home",
    icon: <HomeOutlined />,
  },
  {
    path: "/likes",
    name: "My Likes",
    icon: <HeartOutlined />,
  },
  {
    path: "/bookmarks",
    name: "My Bookmarks",
    icon: <BookOutlined />,
  },
  {
    path: "/posts",
    name: "My Posts",
    icon: <FormOutlined />,
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: <UserOutlined />,
  },
];

const menuDataRender = () => menuData;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const menuItemRender = (item: any, dom: any) => (
  <Link to={item.path}>{dom}</Link>
);

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    navigate("/sign-in");
  };

  return (
    <ProLayout
      title="Algobulls Social"
      logo={logo}
      menuDataRender={menuDataRender}
      menuItemRender={menuItemRender}
      menuFooterRender={() => (
        <Button type="primary" danger onClick={() => logout()}>
          Log Out
        </Button>
      )}
      location={location}>
      <section className="main">{children}</section>
      <DefaultFooter
        className="layout-footer"
        copyright="@2023 by Shahrear ahamed with Ant Design"
        links={[
          {
            key: "github",
            title: <GithubOutlined />,
            href: "https://github.com/shahrear-ahamed",
            blankTarget: true,
          },
          {
            key: "Ant Design",
            title: <LinkedinOutlined />,
            href: "https://www.linkedin.com/in/shahrear-ahamed/",
            blankTarget: true,
          },
        ]}
      />
    </ProLayout>
  );
}
