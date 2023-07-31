// Import Next
import Image from "next/image";

// Import Styles
import "./TrustedBy.scss";

export default function TrustedBy() {
  return (
    <div className="trusted-by">
      <div className="container">
        <Image
          src={"/images/meta.png"}
          width={80}
          height={80}
          alt="trusted-by"
        />
        <Image
          src={"/images/google.png"}
          width={80}
          height={80}
          alt="trusted-by"
        />
        <Image
          src={"/images/netflix.png"}
          width={80}
          height={80}
          alt="trusted-by"
        />
        <Image
          src={"/images/pandg.png"}
          width={80}
          height={80}
          alt="trusted-by"
        />
        <Image
          src={"/images/paypal.png"}
          width={80}
          height={80}
          alt="trusted-by"
        />
      </div>
    </div>
  );
}
