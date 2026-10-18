import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

export default function NotFound() {
  return (
    <Container>
      <div style={{ padding: "14rem 0 8rem", textAlign: "center" }}>
        <h1>Not found</h1>
        <p style={{ margin: "1rem auto 2rem", maxWidth: "32rem" }}>
          That page does not exist. The rooms and everything else are on the
          home page.
        </p>
        <ButtonLink href="/">Back to the hotel</ButtonLink>
      </div>
    </Container>
  );
}
