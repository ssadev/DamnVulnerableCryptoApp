import ApiRequest from "../Common/ApiRequest";

export class DocumentationService extends ApiRequest {
  public static getDocumentation(doc: string | undefined): Promise<string> {
    return new Promise((resolve, reject) => {

      const url = `${ApiRequest.getApiUrl()}/docs/${doc}`;
      fetch(url).then(res => resolve(res.text())).catch(err => reject(err));
    });
  }

}