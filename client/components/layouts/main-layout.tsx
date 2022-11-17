interface MainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <>
      <nav data-testid="nav-main-layout">
        <span>Layouts Exaqsdlmqskdmlqskdmlmple</span>
      </nav>
      <main>{children}</main>
    </>
  );
}
