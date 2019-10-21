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

export async function getPage(id, lang = 'ru') {
  const url = `${BASE_URI}/wp/v2/pages/${id}?lang=${lang}`;
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
