import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
    About,
    Home,
    PageNotFound,
    PeopleEdit,
    PeopleFactory,
    PeopleList,
} from 'pages';
import { Footer, Header, HeaderTitle, Menu, SideMenu } from 'components';
import { footerSections, sectionGroups } from 'models';
import { usePeopleStore } from 'hooks';

function App() {
    const { countPeople } = usePeopleStore();
    useEffect(() => {
        countPeople();
    }, [countPeople]);

    return (
        <Suspense fallback="...is loading">
            <Header>
                <HeaderTitle>
                </HeaderTitle>
            </Header>

            <div className="h-full flex">
                <SideMenu />

                <div className="mt-16 w-full">
                    <div className="h-full">
                        <Routes>
                            <Route path={`${process.env.REACT_APP_ROUTE_URL}/people`} element={<PeopleList />} />
                            <Route
                                path={`${process.env.REACT_APP_ROUTE_URL}/people/factory`}
                                element={<PeopleFactory />}
                            />
                            <Route
                                path={`${process.env.REACT_APP_ROUTE_URL}/people/:id`}
                                element={<PeopleEdit />}
                            />
                            <Route
                                path={`${process.env.REACT_APP_ROUTE_URL}/menu`}
                                element={<Menu sectionGroups={sectionGroups} />}
                            />
                            <Route path={`${process.env.REACT_APP_ROUTE_URL}/home`} element={<Home />} />
                            <Route path={`${process.env.REACT_APP_ROUTE_URL}/about`} element={<About />} />
                            <Route path={`${process.env.REACT_APP_ROUTE_URL}/`} element={<Home />} />

                            <Route
                                path={`${process.env.REACT_APP_ROUTE_URL}/page-not-found`}
                                element={<PageNotFound />}
                            />

                            <Route
                                path="*"
                                element={
                                    <Navigate to={`${process.env.REACT_APP_ROUTE_URL}/page-not-found`} replace />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </div>

            <Footer sections={footerSections} />
        </Suspense>
    );
}

export default App;
