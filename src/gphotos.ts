import axios, { AxiosResponse } from "axios";

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;

function obtainPhotos(content: string): Array<Set<any>> {
  const links: Set<any> = new Set();
  let match: RegExpExecArray;
  match = regex.exec(content);
  while (match) {
    links.add(match[1]);
    match = regex.exec(content);
  }
  return Array.from(links);
}

export async function getAlbum(id: number) {
  try {
    const response: AxiosResponse = await axios.get(`https://photos.app.goo.gl/${id}`);
    return obtainPhotos(response.data);
  } catch (e) {
    return null;
  }
}
