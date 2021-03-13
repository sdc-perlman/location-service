#!/bin/bash
sudo -u procore dropdb sdcperlman
sudo -u procore dropuser sdcperlman
sudo -u procore createuser sdcperlman
sudo -u procore createdb --owner=sdcperlman sdcperlman
