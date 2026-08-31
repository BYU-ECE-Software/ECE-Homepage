interface PageTitleProps {
  title: string;
}

// Pages don't need a title. Use it when you feel it works with the vibe of the site

// Page Title. You pass in what you want the title to actually say
const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="w-full">
      <header className="text-byu-dark-gray w-full bg-[#F6F6F8] px-6 py-14">
        <div className="flex items-center justify-center">
          <h1 className="text-center text-4xl font-semibold tracking-widest">{title}</h1>
        </div>
      </header>
    </div>
  );
};

export default PageTitle;
