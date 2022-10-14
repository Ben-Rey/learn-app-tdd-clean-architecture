interface MainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <>
      <nav data-testid="nav-main-layout">
        <span>Layouts Example</span>
      </nav>
      <main>{children}</main>
    </>
  );
}
