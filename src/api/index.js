export const BASE_URI = window.location.origin.includes('localhost')
  ? 'https://tgi.thelegacy.com.ua'
  : window.location.origin;

export async function getRequest(url) {
  try {
    const response = await fetch(url, {
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return {
      success: true,
      data: await response.json(),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

export async function sendForm(data) {
  const url = `${BASE_URI}/mail/mail.php`;
  try {
    const response = await fetch(url, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
}

export async function sendSubscribe(url) {
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
}

export async function getMenu(lang = 'ru') {
  const url = `${BASE_URI}/wp-json/menus/v1/menus/Main?lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getPageTitle(id, lang = 'ru') {
  const url = `${BASE_URI}/wp-json/tgi/v1/page_title/${id}?lang=${lang}`;
  const response = await getRequest(url);
  return response;
}

export async function getFullMenu(lang = 'ru') {
  const url = `${BASE_URI}/wp-json/tgi/v1/products-nav?lang=${lang}`;
  const [menu, products] = await Promise.all([getMenu(lang), getRequest(url)]);
  return [menu, products];
}

export async function getPage(id, lang = 'ru') {
  const url = `${BASE_URI}/wp-json/wp/v2/pages/${id}?lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getPosts(id, lang = 'ru') {
  const url =
    id === 'news'
      ? `${BASE_URI}/wp-json/tgi/v1/${id}?per_page=99&lang=${lang}`
      : `${BASE_URI}/wp-json/wp/v2/${id}?per_page=99&lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getFilteredPosts(category, ids, lang = 'ru') {
  const url = `${BASE_URI}/wp-json/wp/v2/${category}?include=${ids.join(
    ',',
  )}&lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getPost(postType, slug, lang = 'ru') {
  const url =
    postType === 'news'
      ? `${BASE_URI}/wp-json/tgi/v1/${postType}/${slug}?lang=${lang}`
      : `${BASE_URI}/wp-json/wp/v2/${postType}?slug=${slug}&lang=${lang}`;

  // const url = `${BASE_URI}/wp/v2/${postType}?slug=${slug}&lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

// async function postRequest(url) {
//   try {
//     const response = await fetch(url, {
//       method: 'post',
//     });
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return {
//       success: true,
//       data: await response.json(),
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error,
//     };
//   }
// }
