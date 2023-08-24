import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <section
        className={`${utilStyles.padding20px} ${utilStyles.textAlignCenter}`}
      >
        <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1>
      </section>
    </Layout>
  );
}
