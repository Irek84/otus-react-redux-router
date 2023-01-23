import { useAppSelector } from "../app/hooks";
import PageNameEdit from "../components/page-name-edit/page-name-edit";
import { selectPageName } from "../components/page-name-edit/page-name-slice";

const MainPage = () => {
  const pageName = useAppSelector(selectPageName);
  return (
    <main>
      <h1>{pageName}</h1>
      <PageNameEdit />
    </main>
  );
}

export default MainPage;
