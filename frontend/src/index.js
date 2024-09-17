import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppUser from "./_user/AppUser";
import AppAdmin from "./_admin/AppAdmin";

// Kiểm tra URL hiện tại
const path = window.location.pathname;

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    // Nếu URL bắt đầu bằng "/admin", render AppAdmin
    if (path.startsWith('/admin')) {
        root.render(
            <BrowserRouter>
                <React.StrictMode>
                    <AppAdmin />
                </React.StrictMode>
            </BrowserRouter>
        );
    } else {
        // Ngược lại, render AppUser
        root.render(
            <BrowserRouter>
                <React.StrictMode>
                    <AppUser />
                </React.StrictMode>
            </BrowserRouter>
        );
    }
}
