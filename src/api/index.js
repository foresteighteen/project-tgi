const BASE_URI = 'https://tgi.thelegacy.com.ua/wp-json';

async function getRequest(url) {
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

export async function getMenu(lang = 'ru') {
  const url = `${BASE_URI}/menus/v1/menus/Main?lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getPage(id, lang = 'ru') {
  const url = `${BASE_URI}/wp/v2/pages/${id}?lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getPosts(id, lang = 'ru') {
  const url =
    id === 'news'
      ? `${BASE_URI}/tgi/v1/${id}?per_page=99&lang=${lang}`
      : `${BASE_URI}/wp/v2/${id}?per_page=99&lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getFilteredPosts(category, ids, lang = 'ru') {
  const url = `${BASE_URI}/wp/v2/${category}?include=${ids.join(
    ',',
  )}&lang=${lang}`;
  const response = await getRequest(url);

  return response;
}

export async function getPost(postType, slug, lang = 'ru') {
  const url =
    postType === 'news'
      ? `${BASE_URI}/tgi/v1/${postType}/${slug}?lang=${lang}`
      : `${BASE_URI}/wp/v2/${postType}?slug=${slug}&lang=${lang}`;
      console.log(url)
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
