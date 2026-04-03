import { loadRoutes } from "./js/IndexedDB/RouteService.js";

document.addEventListener("DOMContentLoaded", async () => {
  const routes = await loadRoutes();
  renderRouteOptions(routes);
});
