

interface AddFoodLayoutProps {
  children: React.ReactNode
}


export default function SettingsLayout({ children }: AddFoodLayoutProps) {
  return (
    <>
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-2/12 ">
            <strong>General information</strong> <br />
            Ingredients <br />
          </aside>
          <div className="lg:w-10/12 pr-10" >{children}</div>
        </div>
    </>
  )
}
