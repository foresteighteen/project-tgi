import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ items, lang }) => {
  if (!items) return null;
  const itemKeys = Object.keys(items);
  return (
    <ul>
      {itemKeys.map(key => (
        <React.Fragment>
          {items[key][0].cat_id === 9 ? (
            items[key].map(item => (
              <li className="no-arrow">
                <Link to={`/${lang}/catalog/${item.slug}`}>{item.title}</Link>
              </li>
            ))
          ) : (
            <li>
              {key}
              <ul>
                {items[key].map(item => (
                  <li>
                    <Link to={`/${lang}/catalog/${item.slug}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default DropdownMenu;
