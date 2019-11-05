/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50024
Source Host           : localhost:3306
Source Database       : rccsystem

Target Server Type    : MYSQL
Target Server Version : 50024
File Encoding         : 65001

Date: 2019-11-05 16:05:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cc_list`
-- ----------------------------
DROP TABLE IF EXISTS `cc_list`;
CREATE TABLE `cc_list` (
  `id` bigint(100) NOT NULL auto_increment,
  `title` varchar(255) default NULL,
  `vintage` varchar(255) default NULL,
  `author` varchar(255) default NULL,
  `abstract` varchar(255) default NULL,
  `tags` varchar(255) default NULL,
  `area` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cc_list
-- ----------------------------
INSERT INTO `cc_list` VALUES ('1', ' 机械设计工程数据类型及其管理技术探求', '2017年33期', ' 苏晓远', '在机械设计工程中,数据内容较为重要,是计算机在辅助设计软件与工程分析软件的过程中,自主形成的数据格式,相互之间很难实现数据共享.为了解决当前的数据共享问题,国际已经针对此类产品模式数据交换设置了规定,要求在明确工程数据类型之后,动态化的对其进行修改,满足当前的机械设计工程数据管理需求,提升管理技术的应用水平.', '机械设计,工程数据类型,管理技术', 'north');
INSERT INTO `cc_list` VALUES ('2', '机械设计工程数据类型及其管理技术分析', '2010年6期', '邰金华', '机械设计工程数据是整个机械产品设计过程中的基础与核心数据,这些工程数据具有类型多样、关系结构复杂、模式动态修改、数据量大等特点.本文在分析机械工程数据的定义与分类的基础上,重点对于机械工程数据管理系统的设计进行探讨,这对进一步深化机械设计工程标准具有一定帮助.', '机械设计,工程数据,管理系统,数据库设计', 'east');
INSERT INTO `cc_list` VALUES ('3', ' 基于大数据分析的协议库存需求预测研究 ', '2019年 01期', ' 胡永焕, 洪芳华, 肖锋, 董凤娜, 张永旭', '在物资集约化和供应链管理智能化的背景下，本文基于协议库存需求分析应用系统工程理论和现代需求链管理理论，构建了包括自上而下和自下而上两种预测模型，并根据预测模型建立适合电力系统采购需求特性的采购需求预测体系，并应用大量历史数据针对不同生命周期阶段和不同的需求类型来分析预测效果，分析过程中通过不断调整', '大数据分析,协议库存,需求预测,Big,Data Analysis,Agreement,Stock Demand,Forecast', 'south');
INSERT INTO `cc_list` VALUES ('4', ' 基于Google Earth的控制点信息的一体化集成实验与分析 ', '2019年 01期', ' 张庆余, 张涛, 王友存', '控制点信息及属性信息是各种工程项目设计、实施及验收的基准。为提高控制点信息存储、查询与更新效率，更直观形象反应控制点变化，需对传统纸媒控制点信息保存方式进行电子化管理。本文依托Google Earth全球地理信息系统平台，并通过KML语言将经过预处理的实验控制点数据及其各类属性信息进行一体化集成。实验结果表明：', 'Google,Earth,控制点信息,KML', 'west');
INSERT INTO `cc_list` VALUES ('5', '基于信息分类编码的工程机械产品数据管理系统研究与实践 ', '2014（学位年度）', '陈科恒', '本文对中小企业产品数据管理(PDM)系统的实施过程中信息编码的标准化方法进行研究,深入探索和研究工程机械产品结构配置管理与信息分类编码的关系,如何通过产品图纸信息分类编码实现工程机械产品结构配置管理,成功实施产品数据管理系统。', '中小企业,工程机械,产品数据管理,信息分类编码,系统设计', 'north');

-- ----------------------------
-- Table structure for `cc_power`
-- ----------------------------
DROP TABLE IF EXISTS `cc_power`;
CREATE TABLE `cc_power` (
  `id` bigint(100) NOT NULL auto_increment,
  `user_id` bigint(100) default NULL,
  `power` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cc_power
-- ----------------------------
INSERT INTO `cc_power` VALUES ('1', '1', 'north');
INSERT INTO `cc_power` VALUES ('2', '1', 'east');
INSERT INTO `cc_power` VALUES ('3', '1', 'south');
INSERT INTO `cc_power` VALUES ('4', '1', 'west');
INSERT INTO `cc_power` VALUES ('5', '2', 'north');
INSERT INTO `cc_power` VALUES ('6', '2', 'east');
INSERT INTO `cc_power` VALUES ('7', '3', 'south');

-- ----------------------------
-- Table structure for `cc_user`
-- ----------------------------
DROP TABLE IF EXISTS `cc_user`;
CREATE TABLE `cc_user` (
  `id` bigint(100) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `password` varchar(255) default NULL,
  `jobId` varchar(255) default NULL,
  `desc` varchar(255) default NULL,
  `state` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cc_user
-- ----------------------------
INSERT INTO `cc_user` VALUES ('1', 'njq', '123456', '', null, null);
INSERT INTO `cc_user` VALUES ('2', 'zwx', '123456', null, null, null);
INSERT INTO `cc_user` VALUES ('3', 'xrk', '123456', null, null, null);
