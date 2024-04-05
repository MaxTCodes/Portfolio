export type ServiceName =
  | "github"
  | "auraside"
  | "mantle"
  | "goldfish"
  | "linkedin"
  | "email"
  | "";

const Link = ({
  href = "" as string,
  children = "",
  color = "" as ServiceName,
}): JSX.Element => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className={`underline decoration-${color} hover:no-underline`}
    >
      {children}
    </a>
  );
};

export const Bio = () => {
  return (
    <>
      <div className="flex-1 min-w-0 text-base font-base leading-7 text-center">
        <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">
          Hello! I&apos;m a senior in high school who has a strong passion for{" "}
          <Link color="github" href="https://github.com/maxtcodes">
            software engineering
          </Link>
          !
        </p>
        <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">
          I have been coding for six years. I&apos;ve worked at{" "}
          <Link color="auraside" href="https://auraside.com/">
            Auraside
          </Link>
          , there I made the current MacOS app for{" "}
          <Link color="mantle" href="https://Mantle.gg/">
            Mantle
          </Link>
          !
        </p>
        <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">
          I&apos;m currently working at{" "}
          <Link href="https://sirius.menu/">Sirius</Link> as a Software
          Engineer. I have also been doing contracting, and freelancing
          projects.
        </p>
        <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">
          Feel free to contact me with any questions by connecting on{" "}
          <Link
            color="linkedin"
            href="https://www.linkedin.com/in/dominick-thakur"
          >
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link color="email" href="mailto:max@maxthakur.xyz">
            send me an email
          </Link>
          !
        </p>
      </div>
    </>
  );
};
