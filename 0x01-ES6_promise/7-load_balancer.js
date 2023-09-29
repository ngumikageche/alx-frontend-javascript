export default function loadBalancer(chinaDownload, USDownload) {
    //Promise.race to determine which promise resolves first
  return Promise.race([chinaDownload, USDownload]);
}
