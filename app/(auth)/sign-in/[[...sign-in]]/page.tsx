import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
    return (
        <section className="flex justify-center w-full mt-20">
            <SignIn
                appearance={{
                    baseTheme: dark,
                    elements: {
                        card: "bg-dark_slate_blue border border-gold",
                        headerTitle: "text-gold",
                        headerSubtitle: "text-white",
                        socialButtonsIconButton: "border border-gold",
                        formFieldInput: "bg-dark_slate_blue border border-gold text-white",
                        formButtonPrimary: "blue-btn",
                        footerActionLink: "text-gold",
                    }
                }}
            />


        </section>
    );
}