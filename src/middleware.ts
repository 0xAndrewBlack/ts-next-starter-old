export const config = {
  watcher: "/",
};

export const middleware = (req: Request, res: Response) => {
  console.log("[Middleware] > Hit.");
};
