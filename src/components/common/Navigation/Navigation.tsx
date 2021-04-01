import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export const Navigation: React.FC = () => {
    return (
        <aside>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={"/main"}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={"/schedule"}
                        >
                            Расписание
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={"/doctors"}
                        >
                            Врачи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={"/patients"}
                        >
                            Пациенты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navigation__item link"
                            activeClassName="active"
                            to={"/finance"}
                        >
                            Финансы
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
