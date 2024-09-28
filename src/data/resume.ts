import { Resume } from '../types/resume'

const resume: Resume = {
    userInfo: {
        name: "Your Name",
        avatar: "https://www.helloimg.com/i/2024/09/28/66f8176d458d2.png",
        email: "email@example.com",
        phone: "+1 (123) 456-7890",
        birthday: "January 1, 1999",
        location: "Hangzhou, China",
        socialLinks: [
            {
                platform: "GitHub",
                url: "https://github.com/wexuo",
                icon: "fab fa-github"
            }
        ]
    },
    skills: [
        '熟悉 Java 编程语言，精通 Spring Framework、Spring Boot 和 Spring Cloud 微服务架构',
        '熟练使用 MySQL、PostgreSQL 等关系型数据库，以及 Redis、MongoDB 等 NoSQL 数据库',
        '熟悉分布式系统设计，包括负载均衡、缓存、消息队列（如 Kafka、RabbitMQ）等技术',
        '熟悉 RESTful API 设计和开发，了解 GraphQL',
        '熟悉常见的设计模式和面向对象编程原则',
        '熟悉 Docker 容器化技术和 Kubernetes 容器编排',
        '熟悉 CI/CD 流程，有使用 Jenkins、GitLab CI 等工具的经验',
        '了解 Linux 操作系统和常用命令，能够进行基本的服务器管理和配置',
        '熟悉 Git 版本控制系统，具备良好的代码审查能力',
        '了解基本的前端技术（HTML、CSS、JavaScript），能够与前端开发人员有效协作',
        '具备良好的问题分析和解决能力，能够进行性能优化和故障排查'
    ],
    education: [
        {
            school: '浙江大学',
            degree: '本科',
            major: '软件工程',
            startDate: '2017',
            endDate: '2021'
        }
    ],
    experiences: [
        {
            company: '信息技术有限公司',
            position: '后端开发工程师',
            startDate: '2021.06',
            endDate: '至今'
        },
        {
            company: '信息技术有限公司',
            position: '后端开发实习生',
            startDate: '2020.12',
            endDate: '2021.06'
        }
    ],
    projects: [
        {
            name: '微服务架构的电子商务平台',
            description: '基于微服务架构的大型电子商务平台，支持高并发访问和复杂业务逻辑',
            details: [
                '使用 Spring Cloud 生态系统构建微服务架构，包括服务注册、发现、配置中心等',
                '实现了基于 OAuth2 和 JWT 的分布式认证授权系统',
                '使用 Apache Kafka 实现微服务间的异步通信和事件驱动架构',
                '设计并实现了分布式事务解决方案，确保跨服务操作的数据一致性',
                '使用 Elasticsearch 实现商品搜索功能，优化搜索性能和准确度',
                '实现了基于 Redis 的分布式缓存系统，显著提升了系统响应速度'
            ]
        },
        {
            name: '实时数据处理和分析平台',
            description: '大数据实时处理和分析平台，用于处理和分析海量的用户行为数据',
            details: [
                '使用 Apache Flink 构建实时数据处理管道，实现毫秒级的数据处理延迟',
                '设计和实现了基于 Apache Kafka 的高吞吐量数据摄取系统',
                '使用 Apache Cassandra 作为时序数据存储，优化了大规模时间序列数据的读写性能',
                '实现了基于 Prometheus 和 Grafana 的实时监控和告警系统',
                '开发了自定义的数据分析 API，支持复杂的聚合查询和数据可视化需求',
                '使用 Docker 和 Kubernetes 实现了整个平台的容器化和自动化部署'
            ]
        },
        {
            name: 'DevOps 自动化平台',
            description: '为开发团队打造的 DevOps 自动化平台，提高开发效率和部署质量',
            details: [
                '使用 GitLab CI/CD 实现了完整的持续集成和持续部署流程',
                '开发了自定义的 Jenkins 插件，实现了复杂的构建和部署逻辑',
                '设计并实现了基于 Ansible 的自动化配置管理系统',
                '使用 ELK 栈（Elasticsearch, Logstash, Kibana）构建了集中式日志管理系统',
                '实现了基于 Prometheus 和 Alertmanager 的全面监控和告警方案',
                '开发了 RESTful API 接口，支持其他系统集成和自动化操作'
            ]
        }
    ],
    portfolio: [
        {
            title: '高性能分布式缓存系统',
            description: '基于 Redis 集群实现的高可用、高性能分布式缓存系统',
            link: 'https://github.com/yourusername/distributed-cache'
        },
        {
            title: '微服务监控平台',
            description: '使用 Spring Boot Admin、Prometheus 和 Grafana 构建的全面微服务监控解决方案',
            link: 'https://github.com/yourusername/microservice-monitor'
        },
        {
            title: 'API 网关',
            description: '基于 Spring Cloud Gateway 开发的可扩展 API 网关，支持动态路由和限流',
            link: 'https://github.com/yourusername/api-gateway'
        }
    ],
    footer: {
        copyright: '© 2024 WEXUO All Rights Reserved.',
        icp: '备案号：浙ICP备xxxxxxxx号-1',
        customText: '未央'
    }
}

export default resume