
package com.jpmc.digital.automation.base;


import org.apache.log4j.FileAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;


public class TestBase  {

    public static Properties prop = null;
    public static Logger APPLICATION_LOG = null;
    public static String resultFolderName = null;
    public FileInputStream fis = null;
    public static String destFolderPath2 = null;

    public TestBase()
    {
      try{
        String path=System.getProperty("user.dir")+"/src/main/resources/settings.properties";
        fis = new FileInputStream(path);
        prop = new Properties();
        prop.load(fis);
        }
      catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static void createResultFolder() {

        if (resultFolderName == null) {
            Date d = new Date();
            resultFolderName = d.toString().replace(":", "_");
            File f = new File(System.getProperty("user.dir") + "//target//" + resultFolderName);
            f.mkdir();
        }
    }

    public static void initLogs(Class<?> class1) {

        System.out.println("i am getting called");

        FileAppender appender = new FileAppender();

        appender.setFile(destFolderPath2 + class1.getSimpleName() + ".log");
        appender.setLayout(new PatternLayout("%d %-5p [%c{1}] %m%n"));
        appender.setAppend(false);
        appender.activateOptions();

        APPLICATION_LOG = Logger.getLogger(class1);
        APPLICATION_LOG.setLevel(Level.DEBUG);
        APPLICATION_LOG.addAppender(appender);

        System.out.println("i am getting called-1");
    }
}
