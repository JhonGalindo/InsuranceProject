USE [master]
GO
/****** Object:  Database [InsuranceManagementDB]    Script Date: 3/6/2020 1:50:06 AM ******/
CREATE DATABASE [InsuranceManagementDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'InsuranceManagementDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\InsuranceManagementDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'InsuranceManagementDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\InsuranceManagementDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [InsuranceManagementDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [InsuranceManagementDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [InsuranceManagementDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [InsuranceManagementDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [InsuranceManagementDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [InsuranceManagementDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [InsuranceManagementDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [InsuranceManagementDB] SET  MULTI_USER 
GO
ALTER DATABASE [InsuranceManagementDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [InsuranceManagementDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [InsuranceManagementDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [InsuranceManagementDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [InsuranceManagementDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [InsuranceManagementDB] SET QUERY_STORE = OFF
GO
USE [InsuranceManagementDB]
GO
/****** Object:  Table [dbo].[CoveringType]    Script Date: 3/6/2020 1:50:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CoveringType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NULL,
 CONSTRAINT [PK_CoveringType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 3/6/2020 1:50:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[DateOfBirth] [datetime] NULL,
	[IdentificationNumber] [varchar](50) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Policy]    Script Date: 3/6/2020 1:50:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Policy](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Description] [varchar](max) NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[CoveringPeriod] [smallint] NOT NULL,
	[PolicyRate] [decimal](18, 0) NOT NULL,
	[CoveringTypeId] [int] NOT NULL,
	[RiskTypeId] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[Covering] [smallint] NOT NULL,
	[State] [bit] NOT NULL,
 CONSTRAINT [PK_Policy] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RiskType]    Script Date: 3/6/2020 1:50:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RiskType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NULL,
	[CoveringPercentage] [int] NOT NULL,
 CONSTRAINT [PK_RiskType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 3/6/2020 1:50:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](max) NOT NULL,
	[LastLogin] [datetime] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CoveringType] ON 

INSERT [dbo].[CoveringType] ([Id], [Description]) VALUES (1, N'Earthquake')
INSERT [dbo].[CoveringType] ([Id], [Description]) VALUES (2, N'Fire')
INSERT [dbo].[CoveringType] ([Id], [Description]) VALUES (3, N'Theft')
INSERT [dbo].[CoveringType] ([Id], [Description]) VALUES (4, N'Loss')
SET IDENTITY_INSERT [dbo].[CoveringType] OFF
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([Id], [Name], [LastName], [DateOfBirth], [IdentificationNumber]) VALUES (1, N'John', N'Hunter', CAST(N'1980-01-01T00:00:00.000' AS DateTime), N'12456')
INSERT [dbo].[Customer] ([Id], [Name], [LastName], [DateOfBirth], [IdentificationNumber]) VALUES (2, N'Kate', N'Johns', CAST(N'1990-03-06T04:48:51.733' AS DateTime), N'7890')
SET IDENTITY_INSERT [dbo].[Customer] OFF
SET IDENTITY_INSERT [dbo].[Policy] ON 

INSERT [dbo].[Policy] ([Id], [Name], [Description], [StartDate], [CoveringPeriod], [PolicyRate], [CoveringTypeId], [RiskTypeId], [CustomerId], [Covering], [State]) VALUES (2, N'Home Policy', N'Protection', CAST(N'2020-01-01T00:00:00.000' AS DateTime), 12, CAST(2000 AS Decimal(18, 0)), 1, 1, 1, 100, 1)
INSERT [dbo].[Policy] ([Id], [Name], [Description], [StartDate], [CoveringPeriod], [PolicyRate], [CoveringTypeId], [RiskTypeId], [CustomerId], [Covering], [State]) VALUES (3, N'Work Policy', N'Protection', CAST(N'2020-03-06T04:14:18.773' AS DateTime), 9, CAST(1200 AS Decimal(18, 0)), 2, 2, 1, 80, 1)
INSERT [dbo].[Policy] ([Id], [Name], [Description], [StartDate], [CoveringPeriod], [PolicyRate], [CoveringTypeId], [RiskTypeId], [CustomerId], [Covering], [State]) VALUES (7, N'Car Policy', N'Protection', CAST(N'2020-03-06T05:10:00.177' AS DateTime), 12, CAST(3500 AS Decimal(18, 0)), 3, 3, 2, 60, 1)
SET IDENTITY_INSERT [dbo].[Policy] OFF
SET IDENTITY_INSERT [dbo].[RiskType] ON 

INSERT [dbo].[RiskType] ([Id], [Description], [CoveringPercentage]) VALUES (1, N'Low', 100)
INSERT [dbo].[RiskType] ([Id], [Description], [CoveringPercentage]) VALUES (2, N'Medium', 100)
INSERT [dbo].[RiskType] ([Id], [Description], [CoveringPercentage]) VALUES (3, N'Medium-High', 100)
INSERT [dbo].[RiskType] ([Id], [Description], [CoveringPercentage]) VALUES (4, N'High', 50)
SET IDENTITY_INSERT [dbo].[RiskType] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [Name], [LastName], [UserName], [Password], [LastLogin]) VALUES (1, N'User', N'Test', N'UserTest', N'1234', CAST(N'2020-03-05T00:30:50.890' AS DateTime))
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[Policy]  WITH CHECK ADD  CONSTRAINT [FK_Policy_CoveringType] FOREIGN KEY([CoveringTypeId])
REFERENCES [dbo].[CoveringType] ([Id])
GO
ALTER TABLE [dbo].[Policy] CHECK CONSTRAINT [FK_Policy_CoveringType]
GO
ALTER TABLE [dbo].[Policy]  WITH CHECK ADD  CONSTRAINT [FK_Policy_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customer] ([Id])
GO
ALTER TABLE [dbo].[Policy] CHECK CONSTRAINT [FK_Policy_Customer]
GO
ALTER TABLE [dbo].[Policy]  WITH CHECK ADD  CONSTRAINT [FK_Policy_RiskType] FOREIGN KEY([RiskTypeId])
REFERENCES [dbo].[RiskType] ([Id])
GO
ALTER TABLE [dbo].[Policy] CHECK CONSTRAINT [FK_Policy_RiskType]
GO
USE [master]
GO
ALTER DATABASE [InsuranceManagementDB] SET  READ_WRITE 
GO
