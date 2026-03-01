export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      products: "Products",
      specs: "Specifications",
      quality: "Quality",
      contact: "Contact Sales",
    },
    hero: {
      badge: "Factory-Direct Supply from China",
      title1: "Premium Tri-ply",
      title2: "Stainless Steel Circles",
      subtitle: "Engineered for high-end cookware manufacturing. Superior thermal conductivity meets industrial-grade durability.",
      cta1: "Get a Free Quote & MTC Sample",
      cta2: "Technical Data Sheet",
      stats: {
        exp: "Years Industry Exp.",
        clients: "Global Clients",
        cert: "ISO Certified Quality",
      },
      mtc: {
        title: "MTC Provided",
        desc: "Every batch comes with a Material Test Certificate ensuring 304/316 compliance.",
      }
    },
    specs: {
      title: "Technical Specifications",
      desc: "Our tri-ply composite material is engineered for precision deep drawing and superior thermal performance. We provide customized solutions for global cookware brands.",
      composition: "Material Composition",
      layers: [
        "Inner: Food Grade SS304 / SS316",
        "Core: High Purity Aluminum (1050/3003)",
        "Outer: Magnetic SS430 (Induction Ready)"
      ],
      table: {
        headerParam: "Parameter",
        headerDetails: "Details",
        rows: [
          { label: "Structure", value: "304/316 Stainless Steel + Aluminum Core + 430 Stainless Steel" },
          { label: "Thickness Range", value: "1.8mm - 3.0mm (Customizable)" },
          { label: "Standard Diameter", value: "250mm - 500mm" },
          { label: "Max Diameter (Special)", value: "Up to 900mm for irregular shapes" },
          { label: "Surface Finish", value: "Mirror Polish / Satin / Hairline" },
          { label: "Application", value: "Frying Pans, Stock Pots, Woks, Pressure Cookers" },
          { label: "Compatibility", value: "Induction, Gas, Electric, Halogen" },
        ]
      }
    },
    features: {
      title: "Why Choose Our Tri-ply?",
      subtitle: "We combine advanced metallurgy with rigorous manufacturing standards to provide the foundation for world-class cookware.",
      items: [
        {
          title: "Excellent Bonding Strength",
          description: "High-temperature and high-pressure roll bonding ensures no delamination even during extreme deep drawing processes.",
        },
        {
          title: "Uniform Heat Distribution",
          description: "The aluminum core thickness is strictly controlled to ensure uniform heat conduction without hot spots.",
        },
        {
          title: "Induction Ready",
          description: "The 430 outer layer is optimized for high-efficiency induction heating, compatible with all modern cooktops.",
        },
        {
          title: "Premium Surface Finish",
          description: "Available in Mirror, Satin, or Hairline finishes, ready for final product assembly with minimal polishing required.",
        },
      ]
    },
    quality: {
      title: "Manufacturing & Quality Control",
      desc: "Our facility is equipped with state-of-the-art testing laboratories to ensure every circle meets international standards for high-end cookware.",
      steps: [
        { title: "Chemical Analysis", desc: "Spectrometric testing for every batch to ensure precise alloy composition (304/316/430)." },
        { title: "Tensile & Elongation", desc: "Strict testing of mechanical properties to guarantee excellent deep drawing performance." },
        { title: "Hardness Testing", desc: "Rockwell/Vickers hardness testing to maintain consistency across production runs." },
        { title: "Bonding Strength", desc: "Peel tests and thermal shock tests to verify the integrity of the composite layers." },
      ],
      certTitle: "Certifications"
    },
    applications: {
      title: "Versatile Applications",
      subtitle: "Our tri-ply circles are the preferred choice for manufacturing a wide range of professional-grade cookware.",
      items: [
        { name: "Frying Pans", desc: "Rapid & even heating" },
        { name: "Stock Pots", desc: "Superior heat retention" },
        { name: "Woks", desc: "High-temp durability" },
        { name: "Sauce Pans", desc: "Precise temp control" },
        { name: "Pressure Cookers", desc: "High-pressure safety" }
      ]
    },
    contact: {
      title: "Request a Quote",
      subtitle: "Ready to upgrade your cookware production? Contact our technical sales team for a customized quotation and material samples.",
      emailLabel: "Email Us",
      whatsappLabel: "WhatsApp",
      responseTime: "Response time: Within 12 hours (Business Days)",
      form: {
        name: "Full Name",
        company: "Company Name",
        email: "Email Address",
        whatsapp: "WhatsApp Number",
        details: "Inquiry Details (Thickness, Diameter, Qty)",
        placeholders: {
          name: "John Doe",
          company: "Cookware Factory Ltd.",
          email: "john@company.com",
          whatsapp: "+1 234 567 890",
          details: "e.g. 2.5mm thickness, 320mm diameter, 5000pcs...",
        },
        submit: "Send Inquiry"
      }
    },
    footer: {
      rights: "© 2026 MetalCore Composite Materials Co., Ltd. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: {
      products: "产品中心",
      specs: "技术参数",
      quality: "品质保障",
      contact: "联系销售",
    },
    hero: {
      badge: "中国工厂直供",
      title1: "高端三层复合",
      title2: "不锈钢圆盘",
      subtitle: "专为高端厨具制造设计。卓越的导热性能与工业级耐用性的完美结合。",
      cta1: "获取报价及材质证明(MTC)",
      cta2: "下载技术数据表",
      stats: {
        exp: "年行业经验",
        clients: "全球客户",
        cert: "ISO 质量认证",
      },
      mtc: {
        title: "提供 MTC 证书",
        desc: "每批次均附带材质测试报告，确保符合 304/316 标准。",
      }
    },
    specs: {
      title: "技术参数",
      desc: "我们的三层复合材料专为精密深拉伸和卓越热性能而设计。我们为全球厨具品牌提供定制化解决方案。",
      composition: "材料结构",
      layers: [
        "内层：食品级 SS304 / SS316 不锈钢",
        "芯层：高纯度铝 (1050/3003)",
        "外层：导磁 SS430 不锈钢 (适配电磁炉)"
      ],
      table: {
        headerParam: "参数项目",
        headerDetails: "详细规格",
        rows: [
          { label: "材料结构", value: "304/316 不锈钢 + 铝芯 + 430 不锈钢" },
          { label: "厚度范围", value: "1.8mm - 3.0mm (可定制)" },
          { label: "标准直径", value: "250mm - 500mm" },
          { label: "最大直径 (异形)", value: "最大可达 900mm" },
          { label: "表面处理", value: "镜面抛光 / 亚光 / 拉丝" },
          { label: "应用领域", value: "煎锅、汤锅、炒锅、压力锅" },
          { label: "炉具适配", value: "电磁炉、燃气灶、电炉、卤素炉" },
        ]
      }
    },
    features: {
      title: "为什么选择我们的复合材料？",
      subtitle: "我们将先进的冶金技术与严格的制造标准相结合，为世界级厨具奠定基础。",
      items: [
        {
          title: "卓越的结合强度",
          description: "采用高温高压轧制复合技术，确保在极端的深拉伸工艺中不脱层。",
        },
        {
          title: "均匀的热量分布",
          description: "严格控制铝芯层厚度，确保热传导均匀，无局部热点。",
        },
        {
          title: "适配电磁炉",
          description: "430 外层针对高效电磁加热进行了优化，兼容所有现代灶具。",
        },
        {
          title: "优质表面处理",
          description: "提供镜面、亚光或拉丝处理，可直接进入成品组装，减少抛光工序。",
        },
      ]
    },
    quality: {
      title: "制造与品质控制",
      desc: "我们的工厂配备了最先进的检测实验室，确保每一片圆盘都符合高端厨具的国际标准。",
      steps: [
        { title: "化学成分分析", desc: "每批次进行光谱检测，确保 304/316/430 合金成分精确。" },
        { title: "拉伸与延伸率测试", desc: "严格测试机械性能，保证卓越的深拉伸加工性能。" },
        { title: "硬度测试", desc: "采用洛氏/维氏硬度计检测，确保生产批次的一致性。" },
        { title: "结合力测试", desc: "通过剥离测试和冷热冲击测试，验证复合层的完整性。" },
      ],
      certTitle: "资质认证"
    },
    applications: {
      title: "广泛的应用场景",
      subtitle: "我们的三层复合圆盘是制造各类专业级厨具的首选材料。",
      items: [
        { name: "煎锅", desc: "快速且均匀受热" },
        { name: "汤锅", desc: "卓越的保温性能" },
        { name: "炒锅", desc: "耐高温且耐用" },
        { name: "奶锅", desc: "精准的温度控制" },
        { name: "压力锅", desc: "高压环境安全可靠" }
      ]
    },
    contact: {
      title: "索取报价",
      subtitle: "准备好升级您的厨具生产了吗？联系我们的技术销售团队，获取定制报价和材料样品。",
      emailLabel: "邮件联系",
      whatsappLabel: "WhatsApp",
      responseTime: "响应时间：12 小时内 (工作日)",
      form: {
        name: "姓名",
        company: "公司名称",
        email: "电子邮箱",
        whatsapp: "WhatsApp 号码",
        details: "询价详情 (厚度、直径、数量)",
        placeholders: {
          name: "张先生",
          company: "厨具制造有限公司",
          email: "sales@company.com",
          whatsapp: "+86 138...",
          details: "例如：2.5mm 厚度, 320mm 直径, 5000 片...",
        },
        submit: "发送询盘"
      }
    },
    footer: {
      rights: "© 2026 MetalCore 复合材料有限公司。版权所有。",
      privacy: "隐私政策",
      terms: "服务条款"
    }
  }
};
