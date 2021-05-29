import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation: React.FC = () => {
    return (
        <aside className="navigation-wrapper">
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={'/main'}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={'/schedule'}
                        >
                            Расписание
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={'/doctors'}
                        >
                            Врачи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={'/patients'}
                        >
                            Пациенты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={'/finance'}
                        >
                            Финансы
                        </NavLink>
                    </li>
                    <li>
                        <a className="navigation__item link" href="/api-docs" target="_blank">
                            Swagger
                        </a>
                    </li>
                    <li>
                        <a className="navigation__item link" href="/seeder/run" target="_blank">
                            Start seeding
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__item link"
                            href={`${process.env.REACT_APP_FRONTEND_URL}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Front App
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
