import react from "react";
import RegistrationFormPdf from "@/components/Recruitement/MyPdf";

const Page = () => {
    return (
        <>
        <div className="mt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Recruitment Page</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to the ATPAC Recruitment Page! We are excited that you are interested in joining our team. 
          ATPAC is dedicated to connecting students with career opportunities, organizing impactful events, 
          and enhancing career initiatives on campus.
        </p>
    </div>
    <RegistrationFormPdf 
    companyName="Google"
    jobLocation="Bangalore"
    description="Software Engineering role with full stack development"/>
        </>
    );
}
export default Page;