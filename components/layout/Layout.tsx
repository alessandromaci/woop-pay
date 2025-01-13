import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styles from "../../pages/index.module.scss";
import cx from "classnames";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div
        className={cx(
          styles.baseContainer,
          "min-h-screen w-full flex justify-center items-center"
        )}
      >
        {/* Background Section */}
        <section
          className={cx(
            styles.containerBase,
            "absolute top-0 left-0 w-full h-full z-0 opacity-50"
          )}
        ></section>

        {/* Main Content */}
        <Container
          maxWidth="sm"
          className="relative z-10 w-full max-w-md p-4 mt-8 md:mt-16"
        >
          <Box
            component="form"
            className={cx(
              styles.containerBox,
              "rounded-lg shadow-md p-3 bg-white"
            )}
            style={{ height: "fit-content" }}
          >
            {children}
          </Box>
        </Container>
      </div>
    </>
  );
}
