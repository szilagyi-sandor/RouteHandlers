// // TODO: CHECK
// import React, { lazy } from "react";

// import { Route, Switch } from "react-router-dom";
// import AdminLayout from "Views/Admin/Layout/AdminLayout";
// import { adminRoutes } from "./_Constants/adminRoutes";
// import { checkAuth } from "Modules/Auth/_Helpers/authCheckers";
// import { useAuthContext } from "Modules/Auth/Context/AuthContext";
// import { superAdminRequiredAR } from "Modules/Auth/_Constants/authRules";

// const AdminHomePage = lazy(
//   () => import("Views/Admin/Pages/Home/AdminHomePage")
// );
// const AdminSuperSecretPage = lazy(
//   () => import("Views/Admin/Pages/SuperSecret/AdminSuperSecretPage")
// );
// const AdminRestrictedPage = lazy(
//   () => import("Views/Admin/Pages/Restricted/AdminRestrictedPage")
// );
// const AdminNotFoundPage = lazy(
//   () => import("Views/Admin/Pages/NotFound/AdminNotFoundpage")
// );

// export default function AdminRoutes() {
//   const roleId = useAuthContext();

//   return (
//     <AdminLayout {...({} as any)}>
//       <Switch>
//         <Route path={adminRoutes.adminHome} exact>
//           <AdminHomePage
//             {...({} as any)}
//             // docTitle="Admin home - RouteHandlers"
//           />
//         </Route>

//         {checkAuth(superAdminRequiredAR, roleId) && (
//           <Route path={adminRoutes.adminSuperSecret} exact>
//             <AdminSuperSecretPage
//               {...({} as any)}
//               // docTitle="Admin super secret - RouteHandlers"
//             />
//           </Route>
//         )}

//         <Route path={adminRoutes.restrictedPage} exact>
//           <AdminRestrictedPage
//             // docTitle="Admin restricted - RouteHandlers"
//             {...({} as any)}
//           />
//         </Route>

//         <Route>
//           <AdminNotFoundPage
//             // docTitle="Admin not found - RouteHandlers"
//             {...({} as any)}
//           />
//         </Route>
//       </Switch>
//     </AdminLayout>
//   );
// }

export const TODO = "";
