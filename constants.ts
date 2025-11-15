import { SlideData } from './types';

export const SLIDES_DATA: SlideData[] = [
  {
    title: "Self-Hosting Your Small Business Infrastructure",
    points: [
      { text: "Lessons learned from real-world implementation" },
      { text: "Building a shared knowledge base for others" },
      { text: "Zach W and Jeff B | The Space | November 2025" }
    ]
  },
  {
    title: "Comparison",
    points: [
      { text: "Self-hosting: You own the hardware. You run and maintain the code and control the data." },
      { text: "Hosted services (not an actual cloud): You rent someone else's hardware and they control your data." }
    ]
  },
  {
    title: "Tradeoffs",
    points: [
      { text: "Cost: Big onetime predictable investment vs. variable monthly bills." },
      { text: "Control: Total freedom vs. stuck in platform control." },
      { text: "Speed: Very fast on LAN vs. internet latency." },
      { text: "Lock-in: Open standards vs. proprietary APIs." }
    ]
  },
  {
    title: "Our \"Why\"",
    points: [
      { text: "Low-Time Preference Savings: A strategic upfront investment in order to significantly reduce recurring monthly costs." },
      { text: "Sovereignty: We care about owning our data. We have privacy and control over it. Data ownership is priceless, especially in the world of AI." },
      { text: "Predictability: No bills, upgrade requirements or unexpected outages (you hope 😅)." }
    ]
  },
  {
    title: "Wins",
    points: [
      { text: "Savings: Hundreds of dollars saved every month on equivalent software costs." },
      { text: "Agility: We can deploy new services, updates and changes quickly." },
      { text: "Variety: There's a surprising amount of great business essential software you can self-host." },
      { text: "Security & Privacy: We control the sensitive data about our customers and our content." },
      { text: "Community: We are working to setup a shared knowledge base and reproducible setup for others to use." }
    ]
  },
  {
    title: "Pain Points",
    points: [
      { text: "Upfront Cost: Requires initial capital for hardware, several thousand dollars. Never-ending \"upgrades for later\"." },
      { text: "Steep Learning Curve: You become the sysadmin, network architect, hardware guy, and security expert. Can you manage that?" },
      { text: "Backup is CRITICAL: Data retention and disaster recovery are on you, so be prepared!" },
      { text: "Hardware Failure: Things need maintenance and can fail. Have a plan." },
      { text: "FOSS IS FOSS Bugs: Free software, some quirks sometimes." }
    ]
  },
  {
    title: "Cost Analysis",
    points: [
      { text: "Break-even is real: Upfront investment pays off with recurring monthly savings." },
      { text: "Ongoing costs: Electricity (~$30/month), maintenance time investment." },
      { text: "Data ownership is priceless, especially in the world of AI." },
      { text: "Compare: One-time predictable investment vs. variable monthly bills that never end." }
    ]
  },
  {
    title: "Our Stack",
    points: [
      {
        text: "Hardware:",
        subPoints: [
          { text: "Dell Poweredge T430: Proxmox VE" },
          { text: "Dual-socket 10 Core Intel i7 7 series" },
          {
            text: "4x NVMe 2TB in RAIDZ1",
            subPoints: [
              { text: "NVMe: Super fast for VM storage" },
              { text: "RAIDZ1: Single disk parity for fault tolerance" }
            ]
          },
          {
            text: "2x 8TB HDD in RAID Mirror",
            subPoints: [
              { text: "Cheap data storage for large files and backups" },
              { text: "RAID Mirror provides redundancy in case of disk failure" },
              { text: "Ideal for content storage, Nextcloud files, media, etc." }
            ]
          },
          { text: "128 GB RAM" },
          { text: "2nd Dell: Proxmox Backup Server with 8TB" },
          { text: "Various Network Switches" }
        ]
      },
      {
        text: "Software:",
        subPoints: [
          { text: "OS: Mostly Debian Linux" },
          { text: "Containerization: LXC / KVM and Docker" },
          { text: "Networking: Traefik for Reverse Proxy" },
          { text: "Core Services: Nextcloud, Home Assistant, StartOS, WebServer, Various Special Purpose Apps" }
        ]
      }
    ]
  },
  {
    title: "What We Replaced",
    points: [
      { text: "Nextcloud (Google Suite): Our main app - data storage for content, managing calendar, project collaboration, and more." },
      { text: "Nextcloud Collab (Google Docs): Real-time document collaboration." },
      { text: "Listmonk (Mailchimp): Email newsletter management." },
      { text: "Twenty (HubSpot): Very new, just starting with CRM." },
      { text: "Claper: Self-hosted survey tool." },
      { text: "Pretalx: Self-hosted conference tool." },
      { text: "Telegram: Tried Matrix, using Telegram for communication." },
      { text: "Still using Proton Mail and Proton Pass for essentials (being careful with critical services)." },
      { text: "Bitwarden would be great but too much pressure to get it right - security is critical." },
      { text: "Lightning node & Mempool.space: Keeping small balance, most channels inbound for force closure cost prevention. Our node, our mempool rules." }
    ]
  },
  {
    title: "Proxmox VE",
    points: [
      { text: "" }
    ]
  },
  {
    title: "3-2-1 Backups",
    points: [
      { text: "3 Copies of Your Data" },
      { text: "2 Different Local Media" },
      { text: "1 Off-site Copy" },
      {
        text: "Implementation:",
        subPoints: [
          { text: "Use encrypted VPN (tailscale, wireguard, OpenVPN, etc) for off-site sync." },
          { text: "Set up automated backups with regular, tested restores." }
        ]
      }
    ]
  },
  {
    title: "Networking",
    points: [
      { text: "Core Components: Firewalls and Reverse Proxy." },
      { text: "Internet -> Router -> Server Firewall -> Service" },
      { text: "Each service sits behind both a network and Proxmox-level firewall." },
      { text: "Individual services have specifications for port forwarding to Traefik." },
      { text: "Traefik routes port service to router -> internet." }
    ]
  },
  {
    title: "Security",
    points: [
      { text: "Proactive Updates: Need to consider benefits of new updates with (potentially) breaking changes." },
      { text: "Physical Security: Managing on-premise access and backup safety." },
      { text: "Network Security: Firewalls, log snooping detection, and IP vlan segmentation." },
      { text: "Secret Management: Securely handling necessary exposed credentials and API keys." },
      { text: "User Access Control: Implement the principle of least privilege." },
      { text: "Compliance: We comply with all data retention requirements and deletion requests. Learning as we go like all small businesses - could use guidance in this area." }
    ]
  },
  {
    title: "To The Future?",
    points: [
      { text: "On-Premise AI: Running local LLMs to build and ship faster." },
      { text: "Automation: Ansible playbooks and quick deployments, updates, consistent configs and CI/CD workflows." },
      { text: "Unified Platform: A single user app for auth and access across all services." },
      { text: "IoT & Smart Systems: Deeper integration within physical space using Home Assistant." },
      { text: "Monitoring: Prometheus, Grafana, Uptime Kuma (future goal)." },
      { text: "Alert System: Email/SMS alerts for system health (future goal)." }
    ]
  },
  {
    title: "Lessons Learned",
    points: [
      { text: "Backups: Should have backed up sooner, earlier, read docs more." },
      { text: "Getting easier with AI help, but be careful - can brick your system if it hallucinates!" },
      { text: "Learning as we go, documentation is key." }
    ]
  },
  {
    title: "Advice",
    points: [
      { text: "Start Small: One service at a time. Grok it first, then expand. Tech debt is real." },
      { text: "Plan, Then Act: Use well-documented software. Measure twice, cut once. Tech debt is real. A good plan prevents headaches." },
      { text: "Use the right tools and again - read the documentation." },
      { text: "Team Up: We leaned on each other's specialties. Don't go it alone - forums /AI are great." },
      { text: "Document Everything: Use Gitea - run it locally. Your future self will thank you." },
      { text: "Decision Framework: We try to self-host where we can unless it's extra difficult, not a good tool available, not well documented, or a single point of failure we're not ready for yet. We let our mission and values dictate." },
      { text: "Team Structure: Zach built it, Jeff maintains it as sysadmin and network guy. We're working to document our knowledge in Gitea and GitHub externally with other bitcoin hubs and small businesses." },
      {
        text: "And finally...",
        subPoints: [
          { text: "Backup." },
          { text: "Backup." },
          { text: "BACKUP!" }
        ]
      }
    ]
  },
  {
    title: "Questions?",
    points: [
      { text: "Thank you!" }
    ]
  }
];

