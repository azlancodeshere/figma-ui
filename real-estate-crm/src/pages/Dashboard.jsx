import { Home, Users, Handshake, Coins, CalendarDays, Phone, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import StatCard from "../components/StatCard";



const leadSourceData = [
  { name: "Inbound Call", value: 37.87, deals: 9 },
  { name: "Reference", value: 30.6, deals: 1 },
  { name: "Facebook", value: 6.78, deals: 1 },
  { name: "Website", value: 24.83, deals: 10 },
];

const stageData = [
  { name: "Interested", angelPlaza: 3, angelGarden: 2.7, none: 2.3 },
  { name: "Site Visit Done", angelPlaza: 3.8, angelGarden: 3.2, none: 3 },
  { name: "Unit Shortlisted", angelPlaza: 3.5, angelGarden: 3, none: 2.5 },
  { name: "Contracts Signed", angelPlaza: 3.8, angelGarden: 3.2, none: 2.8 },
  { name: "Offer Initiated", angelPlaza: 3.2, angelGarden: 2.8, none: 2.2 },
  { name: "Offer Accepted", angelPlaza: 3.8, angelGarden: 3.2, none: 2.8 },
];

const salesData = [
  { name: "Jessica Chen", angelPlaza: 5, angelGarden: 6, none: 7 },
  { name: "Mohit Sharma", angelPlaza: 2.2, angelGarden: 5.5, none: 4 },
  { name: "Arjun Mehta", angelPlaza: 4, angelGarden: 5, none: 4 },
  { name: "Emily Wilson", angelPlaza: 3, angelGarden: 4, none: 3 },
];

const pipelineData = [
  { name: "None", deals: 14 },
  { name: "Angel Plaza", deals: 3 },
  { name: "Angel Garden", deals: 1 },
];

const activeListings = [
  { property: "Maplewood House", type: "House", units: "12", price: "Rs.85L", leads: "+35", views: "125", status: "8/12 Occupied", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=100&q=80" },
  { property: "Serenity Villa", type: "Villa", units: "9300", price: "Rs.2.8Cr", leads: "+40", views: "930", status: "Available", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=80" },
  { property: "Rosehill Cottage", type: "House", units: "25", price: "Rs.1.1Cr", leads: "+15", views: "355", status: "Available", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=100&q=80" },
  { property: "Skyline Edge", type: "Apartment", units: "17", price: "Rs.75L", leads: "+11", views: "425", status: "Sold Out", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&q=80" },
];

const leadContacts = [
  { name: "John Doe", location: "New York", image: 11 },
  { name: "Jessica Chen", location: "California, LA", image: 32 },
  { name: "Evan Chris", location: "New York", image: 44 },
  { name: "Jack B.", location: "Ohio, Columbus", image: 49 },
  { name: "Emily Paris", location: "California, LA", image: 47 },
];

const schedule = [
  { title: "Visit Client- Angel Plaza", sub: "Sector 45, Gurugram, Haryana", color: "#00D9B5" },
  { title: "Visit Client – Site Walkthrough", sub: "Whitefield Road, Bengaluru, Karnataka", color: "#00D9B5" },
  { title: "Follow Up – Jessica Chen", sub: "jessica.chen@email.com", color: "#E987AA" },
  { title: "Follow Up – Roger Bouchard", sub: "roger.bouchard@clientmail.com", color: "#E987AA" },
  { title: "Submit Final Offer – Villa Deal", sub: "Finalize and send offer documents.", color: "#DDB52F" },
  { title: "Submit Internal Review – Apartment Pricing", sub: "Update CRM with latest market rates.", color: "#DDB52F" },
];



const leadColors = ["#DDB52F", "#E7D18A", "#F0DA82", "#F5EED7"];
const developmentColors = { angelPlaza: "#DDB52F", angelGarden: "#E9D99E", none: "#F4EEDB" };



const cardClass = "w-full min-w-0 overflow-hidden rounded-[20px] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.10)]";



const Legend = ({ size = "h-4 w-4", className = "" }) => (
  <div className={`flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-gray-500 ${className}`}>
    {[["Angel Plaza", "angelPlaza"], ["Angel Garden", "angelGarden"], ["None", "none"]].map(([label, key]) => (
      <div key={key} className="flex items-center gap-1.5">
        <span className={`${size} rounded-full`} style={{ backgroundColor: developmentColors[key] }} />
        {label}
      </div>
    ))}
  </div>
);



const LeadSourceChart = () => (
  <div className={`${cardClass} p-5`}>
    <h2 className="mb-3 text-[20px] font-medium text-[#292929]">Deals by Lead Source</h2>
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_145px] items-center gap-2">
      <div className="h-[255px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={leadSourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={58} outerRadius={94} paddingAngle={1} strokeWidth={0}>
              {leadSourceData.map((item, i) => <Cell key={item.name} fill={leadColors[i]} />)}
            </Pie>
            <Tooltip formatter={(v) => [`${v}%`, "Percentage"]} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex min-w-0 flex-col gap-5">
        {leadSourceData.map((item, i) => (
          <div key={item.name} className="flex min-w-0 items-start gap-2">
            <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: leadColors[i] }} />
            <div className="min-w-0">
              <p className="truncate text-[12px] text-[#555]">{item.name}</p>
              <p className="text-[11px] text-gray-400">{item.deals} ({item.value}%)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


const StageChart = () => (
  <div className={`${cardClass} p-5`}>
    <h2 className="mb-3 truncate text-[20px] font-medium text-[#292929]">Deals by Stages by Development</h2>
    <Legend size="h-3 w-3" className="mb-2" />
    <div className="h-[255px] w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={stageData} margin={{ top: 5, right: 5, left: -20, bottom: 25 }}>
          <CartesianGrid stroke="#BDBDBD" strokeDasharray="0" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#666" }} interval={0} angle={-38} textAnchor="end" height={75} axisLine={{ stroke: "#777" }} />
          <YAxis tick={{ fontSize: 10, fill: "#666" }} axisLine={false} domain={[0, 10]} ticks={[0, 2.5, 5, 7.5, 10]}
            label={{ value: "Record Count", angle: -90, position: "insideLeft", offset: 5, fontSize: 13, fill: "#666" }} />
          <Tooltip />
          <Bar dataKey="angelPlaza" stackId="development" fill={developmentColors.angelPlaza} />
          <Bar dataKey="angelGarden" stackId="development" fill={developmentColors.angelGarden} />
          <Bar dataKey="none" stackId="development" fill={developmentColors.none} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <Legend className="mt-1" />
  </div>
);



const SalesPeopleChart = () => (
  <div className={`${cardClass} p-5`}>
    <h2 className="mb-3 truncate text-[20px] font-medium text-[#292929]">Deals by Sales People by Development</h2>
    <div className="h-[205px] w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={salesData} layout="vertical" margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid stroke="#BDBDBD" strokeDasharray="0" horizontal={false} />
          <XAxis type="number" domain={[0, 20]} ticks={[0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20]} tick={{ fontSize: 10, fill: "#666" }}
            label={{ value: "Record Count", position: "insideBottom", offset: -2, fontSize: 13, fill: "#666" }} />
          <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 10, fill: "#666" }}
            label={{ value: "Deal Owner", angle: -90, position: "insideLeft", offset: 5, fontSize: 13, fill: "#666" }} />
          <Tooltip />
          <Bar dataKey="angelPlaza" stackId="sales" fill={developmentColors.angelPlaza} />
          <Bar dataKey="angelGarden" stackId="sales" fill={developmentColors.angelGarden} />
          <Bar dataKey="none" stackId="sales" fill={developmentColors.none} radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <Legend className="mt-2" />
  </div>
);



const PipelineTable = () => (
  <div className={`${cardClass} h-full p-5`}>
    <h2 className="mb-5 text-[20px] font-medium text-[#292929]">Deals in Pipeline by Development</h2>
    <table className="w-full table-fixed text-left">
      <thead>
        <tr className="bg-[#F5F7F8]">
          <th className="rounded-l-lg px-3 py-3 text-[13px] font-medium">Development Name</th>
          <th className="w-[125px] rounded-r-lg px-3 py-3 text-right text-[13px] font-medium">Record Count</th>
        </tr>
      </thead>
      <tbody>
        {pipelineData.map((item) => (
          <tr key={item.name}>
            <td className="px-3 py-4 text-[14px]">{item.name}</td>
            <td className="px-3 py-4 text-right text-[14px]">{item.deals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);



const TotalDeals = () => (
  <div className={`${cardClass} p-5`}>
    <h2 className="mb-3 text-[20px] font-medium">Total Deals Closed</h2>
    <div className="relative">
      <div className="h-[48px] w-full overflow-hidden rounded-[10px] bg-[#F2F2F2]">
        <div className="h-full rounded-[10px] bg-gradient-to-r from-[#DDB52F] to-[#EBDCA8]" style={{ width: "40%" }} />
      </div>
      <div className="absolute left-[40%] top-0 h-[56px] border-r-2 border-dashed border-[#DDB52F]" />
    </div>
    <div className="mt-1 flex items-center justify-between">
      <div className="flex items-baseline gap-2">
        <span className="text-[29px] font-semibold">42</span>
        <span className="text-[13px] text-gray-500">Closed Deals</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-[29px] font-semibold">132</span>
        <span className="text-[13px] text-gray-500">On Progress</span>
      </div>
    </div>
  </div>
);


const reminders = [
  { title: "Submit Final Offer- Villa Deal", description: "Finalize and send offer documents.", icon: CalendarDays },
  { title: "Review Contract with Legal", description: "Ensure attorney reviews apartment deal contract today.", icon: CalendarDays },
  { title: "Call Jessica Chen – Follow-up", description: "Discuss her feedback after site visit to Angel Plaza.", icon: Phone },
];

const Reminder = () => (
  <div className={`${cardClass} p-5`}>
    <h2 className="text-[21px] font-medium">Reminder</h2>

    <div className="mt-4 rounded-[17px] bg-[#F7F4EA] p-4">
      <p className="text-[18px] font-medium">Follow-Ups</p>
      <p className="text-[15px] text-gray-500">15 leads need to be followed up.</p>
      <div className="mt-3 flex items-center">
        <div className="flex -space-x-3">
          {[12, 32, 44, 49].map((img) => (
            <img key={img} src={`https://i.pravatar.cc/70?img=${img}`} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
          ))}
        </div>
        <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E3E3E3] text-[11px] font-medium">+11</span>
      </div>
    </div>

    <div className="mt-6 space-y-7">
      {reminders.map(({ title, description, icon: Icon }) => (
        <div key={title} className="flex gap-3">
          <Icon size={17} className="mt-1 shrink-0 text-[#DDB52F]" />
          <div className="min-w-0">
            <p className="text-[15px] font-medium leading-tight">{title}</p>
            <p className="mt-1 text-[13px] leading-tight text-gray-500">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);



const calendarDays = ["", "", ...Array.from({ length: 31 }, (_, i) => i + 1)];

const dayClass = (day) =>
  ({
    8: "mx-auto w-7 rounded bg-[#DDB52F] font-medium",
    10: "underline decoration-[#00D9B5] decoration-2 underline-offset-4",
    11: "underline decoration-[#DDB52F] decoration-2 underline-offset-4",
    14: "underline decoration-[#E987AA] decoration-2 underline-offset-4",
  }[day] || "");

const Calendar = () => (
  <div className={`${cardClass} p-5`}>
    <div className="flex items-center  justify-between">
      <h2 className="text-[28px] font-medium">July 2025</h2>
      <div className="flex items-center gap-5">
        <ChevronLeft size={25} />
        <ChevronRight size={25} />
      </div>
    </div>

    <div className="mt-7 grid grid-cols-7 gap-y-4 text-center">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <span key={`${d}-${i}`} className="text-[12px]  font-medium">{d}</span>
      ))}
      {calendarDays.map((day, i) => (
        <div key={i} className={`flex h-7 items-center justify-center text-[12px] ${dayClass(day)}`}>{day}</div>
      ))}
    </div>

    <div className="mt-54 border-t  border-gray-200 pt-5">
      <h3 className="text-[19px] font-medium">My Schedule</h3>
      <div className="mt-5 space-y-4">
        {schedule.map((s) => (
          <div key={s.title} className="border-l-2 pl-3" style={{ borderColor: s.color }}>
            <p className="text-[14px] font-medium">{s.title}</p>
            <p className="text-[12px] text-gray-500">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);



const ActiveListing = () => (
  <div className={`${cardClass} h-full p-5`}>
    <h2 className="mb-4 text-[21px] font-medium">Active Listing</h2>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-left">
        <thead>
          <tr className="bg-[#F5F7F8]">
            {["Property", "Type", "Units", "Price", "Active Leads", "Views", "Status"].map((h, i, a) => (
              <th
                key={h}
                className={`whitespace-nowrap px-2 py-3 text-[12px] font-medium xl:px-3 xl:text-[13px] ${i === 0 ? "rounded-l-lg" : ""} ${i === a.length - 1 ? "rounded-r-lg" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activeListings.map((item) => (
            <tr key={item.property} className="border-b border-gray-100 last:border-0">
              <td className="px-2 py-3 xl:px-3">
                <div className="flex items-center gap-2">
                  <img src={item.image} alt={item.property} className="h-9 w-9 shrink-0 rounded-lg object-cover" />
                  <span className="text-[12px] font-medium leading-tight xl:text-[13px]">{item.property}</span>
                </div>
              </td>
              <td className="px-2 py-3 text-[12px] xl:px-3 xl:text-[13px]">{item.type}</td>
              <td className="px-2 py-3 text-[12px] xl:px-3 xl:text-[13px]">{item.units}</td>
              <td className="whitespace-nowrap px-2 py-3 text-[12px] xl:px-3 xl:text-[13px]">{item.price}</td>
              <td className="px-2 py-3 xl:px-3">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[12, 32].map((img) => (
                      <img key={img} src={`https://i.pravatar.cc/50?img=${img}`} alt="" className="h-7 w-7 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <span className="ml-1 rounded-full bg-[#E4E5E6] px-2 py-1 text-[10px]">{item.leads}</span>
                </div>
              </td>
              <td className="px-2 py-3 text-[12px] xl:px-3 xl:text-[13px]">{item.views}</td>
              <td className="px-2 py-3 xl:px-3">
                <span
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium ${
                    item.status === "Sold Out" ? "bg-[#FFECEF] text-[#E64C68]" : "bg-[#D8FAF3] text-[#2AB89F]"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);



const LeadsContacts = () => (
  <div className={`${cardClass} h-full p-5`}>
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[20px] font-medium">Leads Contacts</h2>
      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F7F8]">
        <ArrowUpRight size={15} />
      </button>
    </div>
    <div className="space-y-4">
      {leadContacts.map((c) => (
        <div key={c.name} className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-3">
            <img src={`https://i.pravatar.cc/80?img=${c.image}`} alt={c.name} className="h-10 w-10 shrink-0 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="truncate text-[14px] font-medium">{c.name}</p>
              <p className="truncate text-[11px] text-gray-500">{c.location}</p>
            </div>
          </div>
          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F7F8]">
            <Phone size={15} />
          </button>
        </div>
      ))}
    </div>
  </div>
);


const Dashboard = () => (
  <main className="min-h-screen w-full overflow-x-hidden bg-[#F5F7F8]">
    <div className="grid w-full min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">

     
      <section className="w-full min-w-0 p-4 lg:p-5">

        
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          <StatCard icon={Home} title="Active Listing" value="23" change="-12%" negative />
          <StatCard icon={Users} title="Active Leads" value="120" change="+12%" />
          <StatCard icon={Handshake} title="Total Closed" value="42" change="+12%" />
          <StatCard icon={Coins} title="Total Revenue" value="Rs.22Cr." change="+12%" />
        </div>

        
        <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-2">
          <LeadSourceChart />
          <StageChart />
        </div>

       
        <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-4">
            <SalesPeopleChart />
            <TotalDeals />
          </div>
          <div className="min-w-0">
            <PipelineTable />
          </div>
        </div>

       
        <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0"><ActiveListing /></div>
          <div className="min-w-0"><LeadsContacts /></div>
        </div>

      </section>

      
      <aside className="flex w-full min-w-0 flex-col gap-4 px-4 pb-4 lg:py-5 lg:pl-0 lg:pr-5">
        <Reminder />
        <Calendar />
      </aside>

    </div>
  </main>
);

export default Dashboard;