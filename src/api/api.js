import axios from 'axios';

// const baseUrl = "https://reelbackendapi.myreeldream.com";
// export const serverImageUrl = "https://reelbackendapi.myreeldream.com/nodeassets/";
// export const authUrl = "https://reelbackendapi.myreeldream.com";
export const baseUrl = 'https://app.myreeldream.ai';
// export const baseUrl = 'http://localhost:62134';
export const serverImageUrl =
  'https://youblockchainbackendnew.unialsolutions.com/nodeassets/';
export const authUrl = 'https://youblockchainbackendnew.unialsolutions.com';

// Project Category
export const getAllUsers = () => axios.get(`${baseUrl}/api/v1/user/users`);

export const getHomeCardTitle = () => axios.get(`${baseUrl}/homecardtitle`);
export const insertHomeCardTitle = (data) =>
  axios.post(`${baseUrl}/homecardtitle/insert`, data);
export const updateHomeCardTitle = (id, data) =>
  axios.put(`${baseUrl}/homecardtitle/${id}`, data);
export const deleteHomeCardTitle = (id) =>
  axios.delete(`${baseUrl}/homecardtitle/${id}`);

export const uploadToIpfs = (data) =>
  axios.post(`${baseUrl}/api/v1/ipfs/img`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });

export const updateConfig = (data) =>
  axios.put(`${baseUrl}/api/v1/admin/`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });

export const getGetStartedVideo = () => axios.get(`${baseUrl}/getstartedvideo`);
export const updateGetStartedVideo = (id, data) =>
  axios.put(`${baseUrl}/getstartedvideo/${id}`, data);
export const getOnBoardingVideo = () => axios.get(`${baseUrl}/onboardingvideo`);
export const updateOnBoardingVideo = (id, data) =>
  axios.put(`${baseUrl}/onboardingvideo/${id}`, data);
export const getOnBoardMetamaskVideo = () =>
  axios.get(`${baseUrl}/onboardmetamaskvideo`);
export const updateOnBoardMetamaskVideo = (id, data) =>
  axios.put(`${baseUrl}/onboardmetamaskvideo/${id}`, data);

export const getHomeCardList = () => axios.get(`${baseUrl}/api/v1/admin/home`);
export const updateHomeCardList = (data) => {
  axios.put(`${baseUrl}/api/v1/admin/home`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
};
export const getHomeCardItems = () => axios.get(`${baseUrl}/homecardlist`);
export const insertHomeCardItems = (data) =>
  axios.post(`${baseUrl}/homecardlist/insert`, data);
export const updateHomeCardItems = (id, data) =>
  axios.put(`${baseUrl}/homecardlist/${id}`, data);
export const deleteHomeCardItems = (id) =>
  axios.delete(`${baseUrl}/homecardlist/${id}`);

// Blogs
export const getBlogCategory = () => axios.get(`${baseUrl}/api/v1/category/`);
export const insertBlogCategory = (data) =>
  axios.post(`${baseUrl}/api/v1/category/`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
export const updateBlogCategory = (id, data) =>
  axios.put(`${baseUrl}/api/v1/category/${id}`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
export const deleteBlogCategory = (id) =>
  axios.delete(`${baseUrl}/api/v1/category/${id}`, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });

export const getBlogs = () => axios.get(`${baseUrl}/api/v1/blog/`);
export const insertBlogs = (data) =>
  axios.post(`${baseUrl}/api/v1/blog/`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
export const updateBlogs = (id, data) =>
  axios.put(`${baseUrl}/api/v1/blog/${id}`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
export const deleteBlogs = (id) =>
  axios.delete(`${baseUrl}/api/v1/blog/${id}`, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });

export const getKnowledge = () => axios.get(`${baseUrl}/api/v1/knowledge`);
export const insertKnowledge = (data) =>
  axios.post(`${baseUrl}/api/v1/knowledge`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
export const updateKnowledge = (id, data) =>
  axios.put(`${baseUrl}/api/v1/knowledge/${id}`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
export const deleteKnowledge = (id) =>
  axios.delete(`${baseUrl}/api/v1/knowledge/${id}`, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });

export const getTermsConditons = () => axios.get(`${baseUrl}/termconditions`);
export const updateTermsConditons = (id, data) =>
  axios.put(`${baseUrl}/termconditions/${id}`, data);
export const getPolicies = () => axios.get(`${baseUrl}/privacypolicy`);
export const updatePolicies = (id, data) =>
  axios.put(`${baseUrl}/privacypolicy/${id}`, data);
export const getPopupMessage = () => axios.get(`${baseUrl}/popupmessage`);
export const updatePopupMessage = (id, data) =>
  axios.put(`${baseUrl}/popupmessage/${id}`, data);

// SEO Pages
export const getHomePageSEO = () => axios.get(`${baseUrl}/homepageseo`);
export const updateHomePageSEO = (id, data) =>
  axios.put(`${baseUrl}/homepageseo/${id}`, data);
export const getPolicyPageSEO = () => axios.get(`${baseUrl}/policypageseo`);
export const updatePolicyPageSEO = (id, data) =>
  axios.put(`${baseUrl}/policypageseo/${id}`, data);
export const getTermsPageSEO = () => axios.get(`${baseUrl}/termspageseo`);
export const updateTermsPageSEO = (id, data) =>
  axios.put(`${baseUrl}/termspageseo/${id}`, data);
export const getKnowledgePageSEO = () =>
  axios.get(`${baseUrl}/knowledgepageseo`);
export const updateKnowledgePageSEO = (id, data) =>
  axios.put(`${baseUrl}/knowledgepageseo/${id}`, data);

export const getGPTScript = (id) => axios.get(`${baseUrl}/getscripts/${id}`);
export const getWelcomMail = () => axios.get(`${baseUrl}/welcomemail`);
export const updateWelcomMail = (id, data) =>
  axios.put(`${baseUrl}/welcomemail/${id}`, data);

export const getAllHirings = () => axios.get(`${baseUrl}/hirings`);
export const getAllHiringsWithUsers = () =>
  axios.get(`${baseUrl}/hiringsWithUsers`);
export const updateHirings = (id, data) =>
  axios.put(`${baseUrl}/hirings/${id}`, data);
export const getHiringsMilestones = () =>
  axios.get(`${baseUrl}/hiringsMilestones`);
export const updateHiringsMilestones = (id, data) =>
  axios.put(`${baseUrl}/hiringsMilestones/${id}`, data);

export const getSupportChat = () => axios.get(`${baseUrl}/supporttickets`);
export const updateSupportStatus = (id, data) =>
  axios.put(`${baseUrl}/supporttickets/${id}`, data);

// Packages:
export const getPackages = () => axios.get(`${baseUrl}/api/v1/admin/packages`);
export const insertPackages = (data) =>
  axios.post(`${baseUrl}/packages/insert`, data);
export const updatePackages = (data) =>
  axios.put(`${baseUrl}/api/v1/admin/packages`, data, {
    headers: {
      Authorization: localStorage.getItem('ybToken'),
    },
  });
export const deletePackages = (id) => axios.delete(`${baseUrl}/packages/${id}`);

export const getOrganizations = () => axios.get(`${baseUrl}/api/v1/brand/`);

// Earnigns
export const getSubscribersEarnings = () =>
  axios.get(`${baseUrl}/subscribers_earnings`);

export const getSingleScript = (id) =>
  axios.get(`${baseUrl}/getsinglescript/${id}`);
