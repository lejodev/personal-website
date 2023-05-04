import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      {/* <NavBar /> */}
      <Header />
      <AboutMe />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
}
