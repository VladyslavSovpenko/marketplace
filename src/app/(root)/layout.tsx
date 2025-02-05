import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import {APP_DESCRIPTION, APP_NAME} from "../../../lib/constants";
import Header from "../../../components/header";
import Footer from "../../../components/footer/index.";

const inter = Inter({
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: `${APP_NAME}`,
    description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col">
            <Header/>
            <main className="flex-1 wrapper">{
                children
            }</main>
            <Footer/>
        </div>
    );
}
