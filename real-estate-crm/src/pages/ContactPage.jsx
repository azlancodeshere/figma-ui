import {
  Search,
  Grid2X2,
  ChevronDown,
} from "lucide-react";

const contacts = [
  {
    name: "John Doe",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Broker",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "Active",
    assigned: "Jessica Chen",
  },
  {
    name: "Ananya Verma",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Buyer",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "In Progress",
    assigned: "Jessica Chen",
  },
  {
    name: "Ravi Kapoor",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Developer",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "Cold",
    assigned: "Jessica Chen",
  },
  {
    name: "Emily Mehra",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Buyer",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "Converted",
    assigned: "Jessica Chen",
  },
  {
    name: "John Doe",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Seller",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "Not Interested",
    assigned: "Jessica Chen",
  },
  {
    name: "Ananya Verma",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Buyer",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "Active",
    assigned: "Jessica Chen",
  },
  {
    name: "Ravi Kapoor",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Investor",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "Active",
    assigned: "Jessica Chen",
  },
  {
    name: "Emily Mehra",
    email: "john@urbanrealty.com",
    company: "Urban Realty",
    role: "Broker",
    phone: "+91 9411521487",
    stage: "Negotiation",
    status: "Active",
    assigned: "Jessica Chen",
  },
];

const statusStyles = {
  Active: "border-green-500 text-gray-700",
  "In Progress": "border-yellow-400 text-gray-700",
  Cold: "border-gray-400 text-gray-700",
  Converted: "border-blue-400 text-gray-700",
  "Not Interested": "border-red-400 text-gray-700",
};

const FilterCheckbox = ({ children }) => {
  return (
    <label className="flex items-center gap-2 text-[16px] text-[#3d3d3d] cursor-pointer">
      <input
        type="checkbox"
        className="
          h-[17px]
          w-[17px]
          appearance-none
          rounded-[4px]
          border
          border-[#bdbdbd]
          bg-white
          checked:bg-[#DDB52F]
          checked:border-[#DDB52F]
          cursor-pointer
        "
      />
      <span>{children}</span>
    </label>
  );
};

const FilterSection = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h3 className="mb-2 text-[22px] font-medium text-[#292929]">
        {title}
      </h3>

      <div className="space-y-[6px]">
        {children}
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`
        inline-flex
        min-w-[80px]
        items-center
        justify-center
        rounded-[5px]
        border
        px-3
        py-1
        text-[15px]
        ${statusStyles[status]}
      `}
    >
      {status}
    </span>
  );
};

const Contacts = () => {
  return (
    <main className="min-h-screen bg-[#F5F7F8]">

      

      <div className="flex w-full">

       

        <aside
          className="
            w-[313px]
            min-w-[313px]
            min-h-[calc(100vh-94px)]
            bg-white
            border-r
            border-[#e5e5e5]
            px-6
            py-2
          "
        >

         

          <h1 className="mb-3 text-[25px] font-medium text-[#292929]">
            Filters
          </h1>

          
          <div
            className="
              mb-3
              flex
              h-[35px]
              items-center
              rounded-[10px]
              bg-[#F3F5F6]
              px-3
            "
          >
            <input
              type="text"
              placeholder="Search by Contact Name"
              className="
                min-w-0
                flex-1
                bg-transparent
                text-[13px]
                text-gray-700
                outline-none
                placeholder:text-gray-500
              "
            />

            <Search
              size={18}
              strokeWidth={2.5}
              className="text-[#292929]"
            />
          </div>

       

          <FilterSection title="Status">
            <FilterCheckbox>Active</FilterCheckbox>
            <FilterCheckbox>In Progress</FilterCheckbox>
            <FilterCheckbox>Converted</FilterCheckbox>
            <FilterCheckbox>Cold</FilterCheckbox>
            <FilterCheckbox>Not Interested</FilterCheckbox>
          </FilterSection>

          

          <FilterSection title="Role">
            <FilterCheckbox>Buyer</FilterCheckbox>
            <FilterCheckbox>Seller</FilterCheckbox>
            <FilterCheckbox>Investor</FilterCheckbox>
            <FilterCheckbox>Broker</FilterCheckbox>
          </FilterSection>

         

          <FilterSection title="Assigned To">
            <FilterCheckbox>Jessica</FilterCheckbox>
            <FilterCheckbox>Mohit</FilterCheckbox>
            <FilterCheckbox>Arjun</FilterCheckbox>
            <FilterCheckbox>Emily</FilterCheckbox>
          </FilterSection>

         

          <FilterSection title="City">
            <FilterCheckbox>Bengaluru</FilterCheckbox>
            <FilterCheckbox>Pune</FilterCheckbox>
            <FilterCheckbox>Mumbai</FilterCheckbox>
            <FilterCheckbox>Hyderbad</FilterCheckbox>
            <FilterCheckbox>Delhi</FilterCheckbox>
          </FilterSection>

         

          <FilterSection title="Lead Source">
            <FilterCheckbox>Website Form</FilterCheckbox>
            <FilterCheckbox>Referral</FilterCheckbox>
            <FilterCheckbox>Facebook Ads</FilterCheckbox>
            <FilterCheckbox>Walk-In</FilterCheckbox>
            <FilterCheckbox>Email Campaign</FilterCheckbox>
          </FilterSection>

         

          <button
            className="
              mt-1
              h-[34px]
              w-full
              rounded-[9px]
              bg-[#DDB52F]
              text-[15px]
              font-medium
              text-white
              transition
              hover:bg-[#caa323]
            "
          >
            Apply Filters
          </button>

        

          <button
            className="
              mt-4
              h-[34px]
              w-full
              rounded-[9px]
              border
              border-[#DDB52F]
              bg-white
              text-[15px]
              text-[#292929]
              transition
              hover:bg-[#fff9e7]
            "
          >
            Reset Filters
          </button>
        </aside>

       

        <section className="min-w-0 flex-1">

       
          <div
            className="
              border-b
              border-[#d8d8d8]
              px-10
              pt-1
              pb-3
            "
          >

           

            <h1 className="text-[28px] font-semibold text-[#292929]">
              All Contacts
            </h1>

           

            <div className="mt-3 flex items-center justify-between">

             

              <button
                className="
                  h-[32px]
                  rounded-[7px]
                  bg-[#DDB52F]
                  px-3
                  text-[17px]
                  font-medium
                  text-white
                  hover:bg-[#caa323]
                "
              >
                + Create Contact
              </button>

             

              <div className="flex items-center gap-2">

               

                <div
                  className="
                    flex
                    h-[33px]
                    w-[282px]
                    items-center
                    rounded-[6px]
                    bg-[#ECEEEF]
                    px-3
                  "
                >
                  <input
                    type="text"
                    placeholder="Search Contact"
                    className="
                      flex-1
                      bg-transparent
                      text-[13px]
                      outline-none
                      placeholder:text-gray-500
                    "
                  />

                  <Search
                    size={21}
                    strokeWidth={2.5}
                    className="text-[#292929]"
                  />
                </div>

              

                <button
                  className="
                    flex
                    h-[33px]
                    items-center
                    gap-2
                    rounded-[6px]
                    bg-[#F8F5EA]
                    px-3
                  "
                >
                  <Grid2X2
                    size={19}
                    className="text-[#25205D]"
                  />

                  <ChevronDown size={14} />
                </button>

               

                <button
                  className="
                    flex
                    h-[33px]
                    items-center
                    gap-2
                    rounded-[6px]
                    bg-[#F8F5EA]
                    px-3
                    text-[14px]
                  "
                >
                  Actions
                  <ChevronDown size={14} />
                </button>

              </div>
            </div>
          </div>

         

          <div className="px-10 py-5">

            <div className="overflow-hidden rounded-[13px]">

              <table className="w-full table-fixed">

                

                <thead>
                  <tr className="h-[52px] bg-white">

                    <th className="w-[25%] px-4 text-left text-[17px] font-semibold">
                      Contact Name
                    </th>

                    <th className="w-[13%] px-3 text-left text-[17px] font-semibold">
                      Company
                    </th>

                    <th className="w-[10%] px-3 text-left text-[17px] font-semibold">
                      Role
                    </th>

                    <th className="w-[14%] px-3 text-left text-[17px] font-semibold">
                      Phone No.
                    </th>

                    <th className="w-[13%] px-3 text-left text-[17px] font-semibold">
                      Deal Stage
                    </th>

                    <th className="w-[12%] px-3 text-left text-[17px] font-semibold">
                      Status
                    </th>

                    <th className="w-[13%] px-3 text-left text-[17px] font-semibold">
                      Assigned to
                    </th>

                  </tr>
                </thead>

            

                <tbody>

                  {contacts.map((contact, index) => (
                    <tr
                      key={`${contact.name}-${index}`}
                      className="
                        h-[96px]
                        border-b
                        border-[#c8c8c8]
                        bg-[#F5F7F8]
                      "
                    >

                    
                      <td className="px-4">
                        <div>
                          <p className="text-[17px] font-semibold text-[#171717]">
                            {contact.name}
                          </p>

                          <p className="mt-1 text-[15px] text-[#7b7b7b]">
                            Email: {contact.email}
                          </p>
                        </div>
                      </td>

                    

                      <td className="px-3 text-[15px] text-[#181818]">
                        {contact.company}
                      </td>

                     

                      <td className="px-3 text-[15px] text-[#181818]">
                        {contact.role}
                      </td>

                    

                      <td className="px-3 text-[15px] text-[#181818]">
                        {contact.phone}
                      </td>

                    

                      <td className="px-3 text-[15px] text-[#181818]">
                        {contact.stage}
                      </td>

                  

                      <td className="px-3">
                        <StatusBadge status={contact.status} />
                      </td>

                     
                      <td className="px-3 text-[15px] text-[#181818]">
                        {contact.assigned}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>
            </div>

            

            <div className="flex justify-center pt-6">

              <div className="flex items-center gap-3 text-[17px]">

                <button className="text-gray-500">
                  ‹ Prev
                </button>

                <button
                  className="
                    flex
                    h-[29px]
                    w-[29px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F3E5B2]
                    font-medium
                  "
                >
                  1
                </button>

                <button>2</button>

                <button>3</button>

                <button>Next ›</button>

              </div>

            </div>

          </div>
        </section>
      </div>
    </main>
  );
};

export default Contacts;