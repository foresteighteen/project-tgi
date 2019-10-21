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

export async function getPage(id) {
  const url = `${BASE_URI}/wp/v2/pages/${id}`;
  const response = await getRequest(url);

  return response;
}

export async function getPosts(id) {
  const url = `${BASE_URI}/wp/v2/${id}?per_page=99`;
  const response = await getRequest(url);
  
  return response;
}

export async function getFilteredPosts(category, ids) {
  const url = `${BASE_URI}/wp/v2/${category}?include=${ids.join(',')}`;
  const response = await getRequest(url);

  return response;
}

export async function getPost(postType, slug) {
  const url = `${BASE_URI}/wp/v2/${postType}?slug=${slug}`;
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
