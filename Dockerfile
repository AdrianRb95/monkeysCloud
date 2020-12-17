FROM docker.elastic.co/logstash/logstash:7.10.0
LABEL maintainer="Jorge J. Peraza -- jorge@colibricode.com"

# build logstash.conf
# RUN rm -f /usr/share/logstash/pipeline/logstash.conf
ADD logstash.yml /usr/share/logstash/filter/logstash.yml
ADD logstash.conf /usr/share/logstash/filter/logstash.conf

# install dependency
RUN /usr/share/logstash/bin/logstash-plugin install logstash-integration-jdbc
RUN /usr/share/logstash/bin/logstash-plugin install logstash-filter-aggregate
RUN /usr/share/logstash/bin/logstash-plugin install logstash-filter-mutate

# copy lib database jdbc jars
COPY ./compose/mysql/mysql-connector-java-8.0.22.jar /usr/share/logstash/logstash-core/lib/jars/mysql-connector-java.jar
COPY ./compose/sql-server/mssql-jdbc-8.4.1.jre11.jar /usr/share/logstash/logstash-core/lib/jars/mssql-jdbc.jar
COPY ./compose/oracle/ojdbc10-19.8.0.0.jar /usr/share/logstash/logstash-core/lib/jars/ojdbc10.jar
COPY ./compose/postgres/postgresql-42.2.18.jar /usr/share/logstash/logstash-core/lib/jars/postgresql.jar