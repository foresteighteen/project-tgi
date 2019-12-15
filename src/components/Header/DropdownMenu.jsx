import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ items, lang }) => {
  if (!items) return null;
  return (
    <ul>
      {items.map((item, index) =>
        item.child_items ? (
          <li key={index}>
            {item.title}
            <ul>
              {item.child_items.map((childItem, indx) => (
                <li key={indx}>
                  <Link
                    to={`/${lang}/catalog/${childItem.url
                      .split('/')
                      .filter(Boolean)
                      .pop()}`}
                  >
                    {childItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li className="no-arrow" key={index}>
            <Link
              to={`/${lang}/catalog/${item.url
                .split('/')
                .filter(Boolean)
                .pop()}`}
            >
              {item.title}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

export default DropdownMenu;
