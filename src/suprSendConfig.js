import suprsend from '@suprsend/web-sdk';


const workspaceKey= import.meta.env.DEV.VITE_SUPRSEND_WORKSPACE_KEY;
const workspaceSecret= import.meta.env.VITE_SUPRSEND_WORKSPACE_SECRET;
const apiKey= import.meta.env.VITE_API_KEY;

suprsend.init(
    workspaceKey,
    workspaceSecret,
    apiKey
);

export default suprsend;