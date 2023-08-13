export const baseUrl = "http://165.22.29.27:8000";
export const apiUrlEndPoint = {
  fileUploadApiEndpoint: () => {
    return `${baseUrl}/api/app/servicesapps/servicesapps_workspace/validator-model/files/upload`;
  },
  fetchFileDetailsApi: () => {
    return `${baseUrl}/api/app/servicesapps/servicesapps_workspace/validator-model/files/management`;
  },
  runFile: () => {
    return `${baseUrl}/api/app/servicesapps/servicesapps_workspace/validator-model/runner-validate-model`;
  },
  downloadfile:()=>{
    return `${baseUrl}/api/app/servicesapps/servicesapps_workspace/generate-excel`
  }
};
